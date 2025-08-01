import { resolve } from "path";
import { type ManifestV3Export } from "@crxjs/vite-plugin";
import { defineConfig, type BuildOptions } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { stripDevIcons, crxI18n } from "./custom-vite-plugins";
import manifest from "./manifest.json";
import devManifest from "./manifest.dev.json";
import pkg from "./package.json";

import preact from "@preact/preset-vite";

const isDev = process.env.__DEV__ === "true";
// set this flag to true, if you want localization support
const localize = false;

export const baseManifest = {
  ...manifest,
  version: pkg.version,
  ...(isDev ? devManifest : ({} as ManifestV3Export)),
  ...(localize
    ? {
        name: "__MSG_extName__",
        description: "__MSG_extDescription__",
        default_locale: "en",
      }
    : {}),
} as ManifestV3Export;

export const baseBuildOptions: BuildOptions = {
  sourcemap: isDev,
  emptyOutDir: !isDev,
};

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    preact(),
    stripDevIcons(isDev),
    crxI18n({ localize, src: "./src/locales" }),
  ],
  publicDir: resolve(__dirname, "public"),
});
