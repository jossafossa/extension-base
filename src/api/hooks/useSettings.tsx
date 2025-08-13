import type { AvailableSettings } from "../AvailableSettings.types";

import { DEFAULT_SETTINGS, SETTINGS_KEY } from "../AvailableSettings.default";
import { useExtensionStorage } from "./useExtensionStorage";

export const useSettings = () => {
  return useExtensionStorage<AvailableSettings>(SETTINGS_KEY, DEFAULT_SETTINGS);
};
