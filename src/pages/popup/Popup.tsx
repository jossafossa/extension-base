import { Button } from "./components";
import styles from "./Popup.module.scss";

export const Popup = () => {
  return (
    <div className={styles.popup}>
      <Button>My button</Button>
    </div>
  );
};
