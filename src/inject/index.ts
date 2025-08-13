import { getSettings } from "@/api";

export const bootstrap = async () => {
  const settings = await getSettings();
  console.log("Content script loaded with settings:", settings);
};
