import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { plugin as mdPlugin } from 'vite-plugin-markdown';
import terser from '@rollup/plugin-terser';
import { Mode } from 'vite-plugin-markdown';
import { basename } from 'node:path';
import { ssrSafeCustomElements } from './vite.helpers';

// https://vite.dev/config/
export default defineConfig({
	publicDir: false,
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
		emptyOutDir: false,
		target: 'baseline-widely-available',
		outDir: 'dist',
		minify: false,
		rollupOptions: {
			input: {
				altcha: 'src/entry-i18n-bundle.ts'
			},
			output: [
				{
					entryFileNames: 'main/[name].i18n.js',
					format: 'esm'
				},
				{
					entryFileNames: 'main/[name].i18n.min.js',
					format: 'esm',
					plugins: [terser()]
				},
				{
					entryFileNames: 'main/[name].i18n.umd.cjs',
					format: 'umd',
					globals(name) {
						return basename(name);
					}
				},
				{
					entryFileNames: 'main/[name].i18n.umd.min.cjs',
					format: 'umd',
					plugins: [terser()],
					globals(name) {
						return basename(name);
					}
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
});
