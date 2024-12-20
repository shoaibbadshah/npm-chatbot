import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.mjs", format: "esm" },
  ],
  plugins: [
    resolve(), // Resolves node_modules imports
    commonjs(), // Converts CommonJS to ES modules
    typescript({ tsconfig: "./tsconfig.json" }), // Handles TypeScript
  ],
  external: ["react", "react-dom"],
};

// import commonjs from "@rollup/plugin-commonjs";
// import nodeResolve from "@rollup/plugin-node-resolve";
// import terser from "@rollup/plugin-terser";
// import typescript from "@rollup/plugin-typescript";
// import { dts } from "rollup-plugin-dts";

// import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";

// const packageJson = require("./package.json");

// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       PeerDepsExternalPlugin(),
//       nodeResolve(),
//       commonjs(),
//       typescript(),
//       terser(),
//     ],
//     external: ["react", "react-dom"],
//   },
//   {
//     input: "src/index.ts",
//     output: [{ file: packageJson.types }],
//     plugins: [dts.default],
//   },
// ];
