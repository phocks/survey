import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "umd",
      sourcemap: true,
      name: "survey",
      globals: { react: "React" }
    }
  ],
  external: ["react"],
  plugins: [
    postcss({
      camelCase: true,
      modules: true,
      plugins: []
    }),
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    uglify()
  ]
};
