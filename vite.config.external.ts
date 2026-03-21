import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import terser from '@rollup/plugin-terser';
import cssnano from 'cssnano';
import postcss from 'postcss';
import { basename } from 'node:path';
import { ssrSafeCustomElements } from './vite.helpers';

// https://vite.dev/config/
export default defineConfig({
	publicDir: false,
	plugins: [
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
		outDir: 'dist/external',
		minify: false,
		rollupOptions: {
			external: [/\/workers\//],
			input: {
				altcha: 'src/entry-external.ts'
			},
			output: [
				{
					assetFileNames: '[name].[ext]',
					entryFileNames: '[name].js',
					format: 'esm'
				},
				{
					assetFileNames: '[name].[ext]',
					entryFileNames: '[name].min.js',
					format: 'esm',
					plugins: [
						terser(),
						{
							name: 'minify-raw-css',
							async generateBundle(options, bundle) {
								for (const fileName in bundle) {
									const file = bundle[fileName];
									if (file.type === 'asset' && fileName.endsWith('.css')) {
										const result = await postcss([cssnano]).process(file.source, {
											from: fileName
										});
										file.source = result.css;
									}
									if (file.type === 'chunk' && file.facadeModuleId?.endsWith('.css')) {
										delete bundle[fileName];
									}
								}
							}
						}
					]
				},
				{
					assetFileNames: '[name].[ext]',
					entryFileNames: '[name].umd.cjs',
					format: 'umd',
					globals(name) {
						return basename(name);
					}
				},
				{
					assetFileNames: '[name].[ext]',
					entryFileNames: '[name].umd.min.cjs',
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
	}
});
