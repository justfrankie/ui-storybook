import React, { useState } from "react";
import "./App.css";
import MainWindow from "./components/layout/MainWindow.jsx";
import SideNavigation from "./components/layout/SideNavigation.jsx";
import TopNavigationBar from "./components/layout/TopNavigationBar.jsx";
import componentsList from "./componentsList.jsx";

const styles = {
  mainContainer: {
    width: "100%",
    height: "100vh",
  },
  topNavContainer: {
    width: "100%",
  },
  bottomContainer: {
    display: "flex",
  },
  sideNav: {
    backgroundColor: "rgb(165 195 239 / 14%)",
    width: "20%",
    height: "100vh",
  },
  componentsListContainer: {},
  componentsList: {
    listStyle: "none",
    borderTop: "1px solid gray",
    borderBottom: "1px solid gray",
    padding: "3px 5px",
    color: "#4e4e4e",
  },
  mainWindow: {
    width: "70%",
    margin: "0 auto",
  },
};

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(componentsList[0]);

  return (
    <div style={styles.mainContainer}>
      <div style={styles.topNavContainer}>
        <TopNavigationBar
          componentsList={componentsList}
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
        />
      </div>
      <div style={styles.bottomContainer}>
        <nav style={styles.sideNav}>
          <SideNavigation
            componentsList={componentsList}
            currentComponent={currentComponent}
            component={currentComponent}
            setCurrentComponent={setCurrentComponent}
          />
        </nav>
        <div style={styles.mainWindow}>
          <MainWindow currentComponent={currentComponent} />
        </div>
      </div>
    </div>
  );
};

export default App;
