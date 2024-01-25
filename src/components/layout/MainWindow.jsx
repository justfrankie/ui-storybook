import React from "react";
import styles from "./MainWindow.module.css";

const MainWindow = ({ currentComponent }) => {
  const { id, name, Component } = currentComponent;

  return (
    <div className={styles.container}>
      {id !== "home" && <h1>{name}</h1>}
      <Component />
    </div>
  );
};

export default MainWindow;
