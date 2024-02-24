import React from "react";
import lastComponentStyles from "./LastComponentStyles.module.css";

const LatestComponentBanner = ({
  isClosing,
  handleBannerClose,
  componentsList,
  setCurrentComponent,
}) => {
  const handleLatestComponentClick = () => {
    setCurrentComponent((prevComponent) => ({
      ...prevComponent,
      ...componentsList[componentsList.length - 1],
    }));
    handleBannerClose();
  };

  return (
    <div
      className={`${lastComponentStyles["latest-component-banner"]} ${
        isClosing ? lastComponentStyles.closing : ""
      }`}
    >
      <div className={lastComponentStyles["latest-component-container"]}>
        <p className={lastComponentStyles["latest-component-text"]}>
          See the latest added{" "}
          <span
            style={{ borderBottom: "1px solid white", cursor: "pointer" }}
            className="rubik-header"
            onClick={handleLatestComponentClick}
          >
            component
          </span>
          !
        </p>
      </div>
      <span
        className={lastComponentStyles["latest-component-close"]}
        onClick={handleBannerClose}
      >
        X
      </span>
    </div>
  );
};

export default LatestComponentBanner;
