import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import visualizer from "rollup-plugin-visualizer";
import strip from "@rollup/plugin-strip";
const { resolve } = path;
// https://vitejs.dev/config/
export default {
  plugins: [vueJsx(), vue()],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "antdv"
    },
    // cssCodeSplit: true,
    sourcemap: "inline",
    // minify: false,
    rollupOptions: {
      // input: {
      //   main: resolve(__dirname, "src/index.js"),
      //   en: resolve(__dirname, "src/local/lang/en.js"),
      // },
      plugins: [strip(), visualizer()],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue", "@fast-crud/fast-crud", "naive-ui", "@ant-design/icons-vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
          "@fast-crud/fast-crud": "FastCrud",
          "ant-design-vue": "Antdv",
          "naive-ui":"Naive",
          "@ant-design/icons-vue": "IconsVue"
        }
      }
    }
  }
};
