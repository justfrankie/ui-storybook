import React from "react";
import gridWrapper from "./GridLayoutWrapper.module.css";

const GridLayoutWrapper = ({ children }) => {
  return <div className={gridWrapper["grid-container"]}>{children}</div>;
};
export default GridLayoutWrapper;
