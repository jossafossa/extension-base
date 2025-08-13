import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";
import tsconfigPaths from "vite-tsconfig-paths";

function generateManifest() {
  const manifest = readJsonFile("manifest.json");
  const pkg = readJsonFile("package.json");
  return {
    description: pkg.description,
    name: pkg.name,
    version: pkg.version,
    ...manifest,
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    preact(),
    webExtension({
      manifest: generateManifest,
      webExtConfig: {
        startUrl:
          process.env.START_URL ?? "https://github.com/rust-lang/rust/pulls",
        target: "chromium",
      },
    }),
  ],
});
