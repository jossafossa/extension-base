import type { JSX } from "preact/jsx-runtime";

import { type AvailableSettings, useSettings } from "@/api";

import classes from "./Settings.module.scss";

export const Settings = () => {
  const [settings, setSettings] = useSettings();

  const handleSubmit = (event: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newSettings = {
      logging: formData.get("logging") === "on",
    } satisfies AvailableSettings;

    setSettings(newSettings);
  };

  return (
    <form class={classes.settings} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="logging">enable logging</label>
        <input
          checked={settings.logging}
          id="logging"
          name="logging"
          type="checkbox"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};
