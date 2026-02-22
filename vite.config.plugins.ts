import path from 'node:path';
import { defineConfig } from 'vite';
import terser from '@rollup/plugin-terser';
import { generateDts } from './vite.helpers';

const input = process.argv[process.argv.length - 1] || 'src/plugins/obfuscation.plugin.ts';
const plugin = path.basename(input).slice(0, -3);

export default defineConfig({
	publicDir: false,
	plugins: [
		generateDts({
			distPath: `dist/plugins/${plugin}.d.ts`,
			packageName: `altcha/plugins/${plugin}`
		})
	],
	build: {
		emptyOutDir: false,
		outDir: 'dist/plugins',
		minify: false,
		rollupOptions: {
			input,
			output: [
				{
					entryFileNames: '[name].js',
					format: 'esm'
				},
				{
					entryFileNames: '[name].min.js',
					format: 'esm',
					plugins: [terser()]
				},
				{
					entryFileNames: '[name].umd.cjs',
					format: 'umd'
				},
				{
					entryFileNames: '[name].umd.min.cjs',
					format: 'umd',
					plugins: [terser()]
				}
			]
		}
	}
});
