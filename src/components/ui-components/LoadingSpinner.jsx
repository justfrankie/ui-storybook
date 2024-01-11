import React from "react";
import loadingStyles from "./LoadingSpinner.module.css";
// TODO: make this more reusable with different styles: images, icon, text, etc

const LoadingSpinner = ({ text, size }) => {
  return (
    <div className={`${loadingStyles["loading-spinner-container"]}`}>
      <div className={`${loadingStyles["loading-spinner-text-container"]}`}>
        {text?.length > 1 && <span>{text}</span>}
        <div
          className={`${loadingStyles["loading-spinner"]}  ${
            size && loadingStyles[size]
          }`}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
