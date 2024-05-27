// import { defineConfig } from "vite";
import { defineConfig } from 'vitest/config'
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

export default defineConfig(({ command }) => {

  // base: process.env.NODE_ENV === 'production' ? '/eteration-study-case/' : '/',
  const config = {
    base: "/",
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup"
    },
    preview: {
      port: 8080,
      strictPort: true,
    },
    server: {
      port: 8080,
      strictPort: true,
      host: true,
      origin: "http://0.0.0.0:8080",
    },
  }

  if (command !== 'serve') {
    config.base = '/eteration-study-case/';
  }

  return config;
});