import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outputDir: 'dist' // or 'public' or any other name
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
