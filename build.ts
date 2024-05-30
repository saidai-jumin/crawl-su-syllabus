import packageJson from "./package.json";

const { dependencies, peerDependencies } = packageJson;
const external = [
  ...new Set([
    ...Object.keys(dependencies || {}),
    ...Object.keys(peerDependencies || {}),
  ]),
];

Bun.build({
  entrypoints: ["./src/index.ts"],
  target: "bun",
  format: "esm",
  outdir: "./dist",
  external,
  minify: true,
});