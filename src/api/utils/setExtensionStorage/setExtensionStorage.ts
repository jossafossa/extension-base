import browser from "webextension-polyfill";
export const setExtensionStorage = async <T>(key: string, value: T) => {
  try {
    await browser.storage.local.set({ [key]: value });
  } catch (error) {
    console.error(`Error setting data for key "${key}":`, error);
  }
};
