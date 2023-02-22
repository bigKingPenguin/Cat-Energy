import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import autoprefixer from "autoprefixer";
// import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    // viteImagemin({
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   mozjpeg: {
    //     quality: 20,
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: "removeEmptyAttrs",
    //       },
    //     ],
    //   },
    // }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "[name]",
      inject: "body-first",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
  },
});
