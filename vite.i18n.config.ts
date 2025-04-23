/// <reference types="vitest" />
import { defineConfig } from 'vite';

const input = process.argv[process.argv.length - 1];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    target: 'modules',
    outDir: 'dist_i18n',
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
