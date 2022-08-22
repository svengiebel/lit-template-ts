import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  if (command === "build") {
    return {
      plugins: [
        VitePWA({
          registerType: "autoUpdate",
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
