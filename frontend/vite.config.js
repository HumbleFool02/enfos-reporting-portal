import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    // Disables Vite's Host header check - needed for tunneled access (e.g. ngrok).
    allowedHosts: true,
    // Proxies /api same-origin to the backend, so a single frontend tunnel needs no CORS or second tunnel.
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
