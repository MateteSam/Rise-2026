import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [tanstackStart(), tailwindcss(), tsconfigPaths(), react()],
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
});
