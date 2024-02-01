import React from "react";
import lastComponentStyles from "./LastComponentStyles.module.css";

const LatestComponentBanner = ({ isClosing, handleBannerClose }) => {
  return (
    <div
      className={`${lastComponentStyles["latest-component-banner"]} ${
        isClosing ? lastComponentStyles.closing : ""
      }`}
    >
      <div className={lastComponentStyles["latest-component-container"]}>
        <p className={lastComponentStyles["latest-component-text"]}>
          See the latest added{" "}
          <span style={{ borderBottom: "1px solid white", cursor: "pointer" }}>
            component
          </span>
        </p>
      </div>
      <div
        className={lastComponentStyles["latest-component-close"]}
        onClick={handleBannerClose}
      >
        X
      </div>
    </div>
  );
};

export default LatestComponentBanner;
