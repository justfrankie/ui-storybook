import React, { useState } from "react";
import MainWindow from "./components/layout/MainWindow.jsx";
import SideNavigation from "./components/layout/SideNavigation.jsx";
import TopNavigationBar from "./components/layout/TopNavigationBar.jsx";
import componentsList from "./componentsList.jsx";
import appStyles from "./App.module.css";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(componentsList[0]);

  return (
    <div className={appStyles.mainContainer}>
      <div className={appStyles.topNavContainer}>
        <TopNavigationBar
          componentsList={componentsList}
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
        />
      </div>
      <div className={appStyles.bottomContainer}>
        <nav className={appStyles.sideNav}>
          <SideNavigation
            componentsList={componentsList}
            currentComponent={currentComponent}
            component={currentComponent}
            setCurrentComponent={setCurrentComponent}
          />
        </nav>
        <div className={appStyles.mainWindow}>
          <MainWindow currentComponent={currentComponent} />
        </div>
      </div>
    </div>
  );
};

export default App;
