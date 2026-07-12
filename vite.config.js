import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import Sitemap from "vite-plugin-sitemap-generator";

export default defineConfig({
  plugins: [
    react(),

    // Sitemap({
    //   baseUrl: "https://your-domain.com",
    // }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true,
    port: 5173,
  },
});