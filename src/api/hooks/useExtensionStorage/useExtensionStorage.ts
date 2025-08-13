import { useEffect, useState } from "preact/hooks";
import browser from "webextension-polyfill";

import { getExtensionStorage, setExtensionStorage } from "@/api/utils";

export function useExtensionStorage<T>(
  key: string,
  initialValue: T
): [T, (newValue: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    async function loadValue() {
      setValue(await getExtensionStorage(key, initialValue));
    }
    loadValue();
  }, [key, initialValue]);

  useEffect(() => {
    const handleStorageChange = (
      changes: Record<string, browser.Storage.StorageChange>,
      areaName: string
    ) => {
      if (areaName === "local" && changes[key]) {
        setValue(changes[key].newValue as T);
      }
    };
    browser.storage.onChanged.addListener(handleStorageChange);

    return () => {
      browser.storage.onChanged.removeListener(handleStorageChange);
    };
  }, [key]);

  return [value, (newValue: T) => setExtensionStorage(key, newValue)];
}
