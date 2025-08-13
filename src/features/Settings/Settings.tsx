import type { JSX } from "preact/jsx-runtime";

import { type AvailableSettings, useSettings } from "@/api";

import classes from "./Settings.module.scss";

export const Settings = () => {
  const [settings, setSettings] = useSettings();

  const handleSubmit = (event: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newSettings = {
      debugMode: formData.get("debugMode") === "on",
    } satisfies AvailableSettings;

    setSettings(newSettings);
  };

  return (
    <form class={classes.settings} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="debugMode">enable debugMode</label>
        <input
          checked={settings.debugMode}
          id="debugMode"
          name="debugMode"
          type="checkbox"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};
