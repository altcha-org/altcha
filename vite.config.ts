/// <reference types="vitest" />
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    target: "modules",
    lib: {
      entry: "src/entry.ts",
      name: "<<name>>",
      formats: ["es", "umd"],
    },
    minify: true,
    rollupOptions: {},
  },
  test: {
    setupFiles: ['./tests/setup.ts'],
  },
});
