import {
  DEFAULT_SETTINGS,
  SETTINGS_KEY,
} from "@/api/AvailableSettings.default";

import { getExtensionStorage } from "../getExtensionStorage";

export const getSettings = async () => {
  return await getExtensionStorage(SETTINGS_KEY, DEFAULT_SETTINGS);
};
