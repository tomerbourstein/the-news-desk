import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/the-news-desk/",
  plugins: [react()],
  server: {
    host: true,
  },
});
