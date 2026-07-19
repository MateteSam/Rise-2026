import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [tanstackStart(), tailwindcss(), tsconfigPaths(), react(), cloudflare({
    viteEnvironment: {
      name: "ssr"
    }
  })],
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
});