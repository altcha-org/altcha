/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import css from 'rollup-plugin-css-only';

const EXTERNAL = process.env.BUILD_EXTERNAL === '1';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
        css: EXTERNAL ? 'none' : 'injected',
      },
    }),
    EXTERNAL ? css({
      output: 'altcha.css',
    }) : void 0,
  ],
  build: {
    target: 'modules',
    lib: {
      entry: EXTERNAL
        ? 'src/entry-external.ts'
        : 'src/entry.ts',
      name: 'altcha',
      formats: ['iife', 'es', 'umd'],
    },
    outDir: EXTERNAL ? 'dist_external' : 'dist',
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
