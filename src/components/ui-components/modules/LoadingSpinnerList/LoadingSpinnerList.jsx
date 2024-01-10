import React from "react";
import LoadingSpinner from "../../LoadingSpinner";

const spinnerContainer = {
  padding: "20px",
};
const LoadingSpinnerList = () => {
  return (
    <div>
      <span>Default size, no text</span>
      <div style={spinnerContainer}>
        <LoadingSpinner />
      </div>
      <span>Small, with text</span>
      <div style={spinnerContainer}>
        <LoadingSpinner size="small" text="Loading Text" />
      </div>
    </div>
  );
};

export default LoadingSpinnerList;
