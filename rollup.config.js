import glob from "glob";
import { babel } from "@rollup/plugin-babel";

const MODULE_NAME = "ObjectInspector";

const config = [
  {
    input: "src/index.js",
    output: {
      name: MODULE_NAME,
      file: `dist/${MODULE_NAME}.umd.js`,
      format: "umd",
      sourcemap: true,
      compact: true,
    },
    plugins: [babel()],
  },
  {
    input: "src/index.js",
    output: {
      name: MODULE_NAME,
      file: `dist/${MODULE_NAME}.amd.js`,
      sourcemap: true,
      compact: true,
      format: "amd",
      amd: {
        id: MODULE_NAME,
      },
    },
    plugins: [babel()],
  },
  {
    input: glob.sync("src/**/*.js"),
    preserveModules: true,
    output: {
      name: MODULE_NAME,
      dir: "dist",
      format: "cjs",
      exports: "named",
    },
    plugins: [babel()],
  },
];

export default config;
