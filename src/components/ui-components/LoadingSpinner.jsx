import React from "react";
import loadingStyles from "./LoadingSpinner.module.css";
// TODO: make this more reusable with different styles: images, icon, text, etc

const LoadingSpinner = () => {
  return (
    <div className={loadingStyles["loading-spinner-container"]}>
      <div className={loadingStyles["loading-spinner"]}></div>
    </div>
  );
};

export default LoadingSpinner;
