import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {},
      shared: [],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react-dom/client"],
    },
  },
  server: { port: 3000 },
  preview: { port: 3000 },
});
