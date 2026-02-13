import { useState } from "react";
import styles from "./toggle.module.css";
export default function Toggle() {
  const [toggleState, setToggleState] = useState(false);
  const handleButtonClick = () => {
    setToggleState(!toggleState);
  };
  return (
    <>
      <div className={styles.outerDiv}>
        <div className={styles.toggleButton} onClick={handleButtonClick}>
          <div
            className={`${styles.text} ${toggleState ? styles.on : styles.off}`}
          >
            {toggleState ? "ON" : "off"}
          </div>
        </div>
      </div>
    </>
  );
}
