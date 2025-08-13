import { getSettings } from "../getSettings";
const PREFIX = "[Github Tools] ";

export const log = async <T>(value: T) => {
  const { debug } = await getSettings();

  if (debug.showLogs === false) return;

  // log with prefix in color
  console.log(`%c${PREFIX}`, "color: #4CAF50; font-weight: bold;", value);
};
