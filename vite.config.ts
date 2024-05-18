/// <reference types="vitest" />
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import css from "rollup-plugin-css-only";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
      emitCss: true,
    }),
    css({ 
      output: 'altcha.css',
    }),
  ],
  build: {
    target: "modules",
    lib: {
      entry: "src/entry.ts",
      name: "altcha",
      formats: ["iife", "es", "umd"],
    },
    minify: "esbuild",
    rollupOptions: {},
  },
  define: {
    ALTCHA_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  test: {
    setupFiles: ["./tests/setup.ts"],
  },
});
