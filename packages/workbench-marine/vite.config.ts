import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "workbench_marine",
      filename: "remoteEntry.js",
      exposes: {
        "./WorkbenchApp": "./src/WorkbenchApp.tsx",
      },
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
  server: { port: 3001 },
  preview: { port: 3001 },
});
