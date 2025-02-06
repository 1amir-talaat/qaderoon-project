import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    compression({
      algorithm: "brotliCompress", // Brotli compression
      threshold: 1024,
    }),
    compression({
      algorithm: "gzip", // Gzip fallback
      ext: ".gz",
    }),
  ],
  build: {
    sourcemap: true,
  },
});
