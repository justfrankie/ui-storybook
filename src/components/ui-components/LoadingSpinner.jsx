import React from "react";
import styles from "./LoadingSpinner.module.css";
// TODO: make this more reusable with different styles: images, icon, text, etc

const LoadingSpinner = () => {
  return (
    <div className={styles["loading-spinner-container"]}>
      <div className={styles["loading-spinner"]}></div>
    </div>
  );
};

export default LoadingSpinner;
