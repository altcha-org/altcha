import { defineConfig } from 'vite';
import { resolve } from 'path';
import terser from '@rollup/plugin-terser';

export default defineConfig({
	publicDir: false,
	build: {
		outDir: 'dist/lib',
		lib: {
			entry: resolve(__dirname, 'src/entry-lib.ts'),
			name: 'lib'
		},
		minify: false,
		rollupOptions: {
			output: [
				{
					format: 'es',
					entryFileNames: 'index.js'
				},
				{
					format: 'es',
					entryFileNames: 'index.min.js',
					plugins: [terser()]
				},
				{
					format: 'umd',
					name: 'lib',
					entryFileNames: 'index.umd.cjs'
				},
				{
					format: 'umd',
					name: 'plibow',
					entryFileNames: 'index.umd.min.cjs',
					plugins: [terser()]
				}
			]
		}
	}
});
