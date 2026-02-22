import { defineConfig, type UserConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { plugin as mdPlugin } from 'vite-plugin-markdown';
import terser from '@rollup/plugin-terser';
import { Mode } from 'vite-plugin-markdown';
import { ssrSafeCustomElements } from './vite.helpers';

// https://vite.dev/config/
export default defineConfig(
	({ command }) =>
		({
			publicDir: command === 'serve' ? './public' : false,
			plugins: [
				mdPlugin({ mode: [Mode.HTML] }),
				tailwindcss(),
				svelte({
					compilerOptions: {
						customElement: true
					}
				}),
				ssrSafeCustomElements()
			],
			build: {
				target: 'baseline-widely-available',
				outDir: 'dist',
				minify: false,
				rollupOptions: {
					input: {
						altcha: 'src/entry.ts'
					},
					output: [
						{
							entryFileNames: 'main/[name].js',
							format: 'esm'
						},
						{
							entryFileNames: 'main/[name].min.js',
							format: 'esm',
							plugins: [terser()]
						},
						{
							entryFileNames: 'main/[name].umd.cjs',
							format: 'umd'
						},
						{
							entryFileNames: 'main/[name].umd.min.cjs',
							format: 'umd',
							plugins: [terser()]
						}
					]
				}
			},
			define: {
				ALTCHA_VERSION: JSON.stringify(process.env.npm_package_version)
			},
			worker: {
				rollupOptions: {
					output: {
						entryFileNames: 'workers/[name].js'
					}
				}
			}
		}) satisfies UserConfig
);
