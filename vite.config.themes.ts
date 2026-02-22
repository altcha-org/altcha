import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vite';
import { globSync } from 'glob';
import cssnano from 'cssnano';
import postcss from 'postcss';

export default defineConfig({
	publicDir: false,
	build: {
		emptyOutDir: false,
		outDir: 'dist/themes',
		minify: false,
		rollupOptions: {
			input: Object.fromEntries(
				globSync('src/themes/*.css').map((file) => [
					path.basename(file, path.extname(file)),
					fileURLToPath(new URL(file, import.meta.url))
				])
			),
			output: [
				{
					assetFileNames: '[name].[ext]'
				},
				{
					assetFileNames: '[name].min.[ext]',
					plugins: [
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
				}
			]
		}
	}
});
