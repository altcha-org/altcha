import { defineConfig } from 'vite';
import { generateDts } from './vite.helpers';

const input = process.argv[process.argv.length - 1] || 'src/i18n/en.ts';
const lang = input.match(/(\w+)\.ts$/)?.[1];

export default defineConfig({
	publicDir: false,
	plugins: [
		generateDts({
			distPath: `dist/i18n/${lang}.d.ts`,
			packageName: `altcha/i18n/${lang}`
		})
	],
	build: {
		emptyOutDir: false,
		outDir: 'dist/i18n',
		minify: false,
		rollupOptions: {
			input,
			output: [
				{
					entryFileNames: '[name].js',
					format: 'esm'
				},
				{
					entryFileNames: '[name].umd.cjs',
					format: 'umd'
				}
			]
		}
	}
});
