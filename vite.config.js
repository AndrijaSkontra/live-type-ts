import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        leaderboard: resolve(__dirname, "leaderboard/index.html"),
        practice: resolve(__dirname, "practice/index.html"),
        profile: resolve(__dirname, "profile/index.html"),
        play: resolve(__dirname, "play/index.html"),
      },
    },
  },
});
