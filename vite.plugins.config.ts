/// <reference types="vitest" />
import { defineConfig, Plugin } from 'vite';
import { basename, join } from 'node:path';
import { writeFile } from 'node:fs/promises';

const input = process.argv[process.argv.length - 1];

function generateDTs(): Plugin {
  let name: string = '';
  let target: string = '';
  return {
    name: 'generate-d-ts',
    configResolved(config) {
      const lib = config.build.lib;
      if (lib && lib.entry) {
        name = basename(String(lib.entry)).replace('.ts', '');
        target = join(config.build.outDir, name + '.d.ts');
      }
	  },
    async writeBundle() {
      if (target) {
        await writeFile(target, `declare module 'altcha/${name}';`);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    generateDTs(),
  ],
  build: {
    target: 'baseline-widely-available',
    outDir: 'dist_plugins',
    minify: 'esbuild',
    emptyOutDir: false,
    lib: {
      entry: input,
      fileName: '[name]',
      name: '[name]',
      formats: ['es', 'umd'],
    },
    rollupOptions: {},
  },
  define: {
    ALTCHA_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
