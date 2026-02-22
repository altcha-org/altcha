import fs from 'node:fs';
import path from 'node:path';

export const ssrSafeCustomElements = () => {
	return {
		name: 'ssr-safe-custom-elements',
		transform(code: string) {
			if (code.includes('customElements.define')) {
				return {
					code: code.replace(
						/customElements\.define\(/g,
						`if (typeof window !== 'undefined' && window.customElements) customElements.define(`
					),
					map: null
				};
			}
			if (code.includes('let SvelteElement')) {
				return {
					code: code.replace(/let SvelteElement;/g, `let SvelteElement = class {};`),
					map: null
				};
			}
		}
	};
};

export const generateDts = (options: { distPath: string; packageName: string }) => {
	const { distPath, packageName } = options;
	return {
		name: 'generate-dts',
		writeBundle() {
			const dtsContent = `declare module '${packageName}'; export {};\n`;
			const dtsPath = path.resolve(__dirname, distPath);
			fs.writeFileSync(dtsPath, dtsContent);
		}
	};
};
