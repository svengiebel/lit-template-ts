import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  if (command === "build") {
    return {
      plugins: [
        VitePWA({
          registerType: "autoUpdate",
          includeAssets: "assets/*",
          workbox: {
            globPatterns: ["**/*.{js,css,html,png,svg}"],
          },
          devOptions: {
            enabled: true,
          },
        }),
      ],
    };
  } else {
    return {};
  }
});
