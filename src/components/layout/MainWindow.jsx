import React from "react";

const MainWindow = ({ currentComponent }) => {
  const { id, name, Component } = currentComponent;

  return (
    <div style={styles.container}>
      {id !== "home" && <h1>{name}</h1>}
      <Component />
    </div>
  );
};

const styles = {
  container: {
    padding: "5px",
    margin: "10px",
  },
};

export default MainWindow;
