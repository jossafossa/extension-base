import browser from "webextension-polyfill";

const cache: Record<string, any> = {};

// Listen for changes in the storage and update the cache
browser.storage.onChanged.addListener((changes) => {
  for (const [key, { newValue }] of Object.entries(changes)) {
    cache[key] = newValue;
  }
});

export const getExtensionStorage = async <T>(key: string, initialValue: T) => {
  if (key in cache) {
    return cache[key] as T;
  }

  try {
    const result = await browser.storage.local.get(key);
    if (result[key] !== undefined) {
      cache[key] = result[key];
      return result[key] as T;
    }
    return initialValue;
  } catch (error) {
    console.error(`Error loading data for key "${key}":`, error);
    return initialValue;
  }
};
