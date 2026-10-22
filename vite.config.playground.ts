import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { plugin as mdPlugin } from 'vite-plugin-markdown';
import { Mode } from 'vite-plugin-markdown';
import { fileURLToPath } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		mdPlugin({ mode: [Mode.HTML] }),
		tailwindcss(),
		svelte({
			compilerOptions: {
				customElement: true
			}
		})
	],
	root: 'src/playground',
	build: {
		target: 'baseline-widely-available',
		outDir: '../../dist_playground',
		minify: false,
		rollupOptions: {
			input: {
				main: fileURLToPath(new URL('./src/playground/index.html', import.meta.url)),
				'his-recorder': fileURLToPath(
					new URL('./src/playground/his-recorder.html', import.meta.url)
				)
			}
		}
	},
	define: {
		ALTCHA_VERSION: JSON.stringify(process.env.npm_package_version)
	}
});
