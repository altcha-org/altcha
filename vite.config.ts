/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
        css: 'injected',
      },
    }),
  ],
  build: {
    target: 'modules',
    lib: {
      entry: 'src/entry.ts',
      name: 'altcha',
      formats: ['es', 'umd'],
    },
    outDir: 'dist',
    minify: 'esbuild',
    rollupOptions: {},
  },
  define: {
    ALTCHA_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  worker: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  test: {
    setupFiles: ['./tests/setup.ts'],
  },
});
