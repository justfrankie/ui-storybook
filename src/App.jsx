import React, { useState } from "react";
import MainWindow from "./components/layout/MainWindow.jsx";
import SideNavigation from "./components/layout/SideNavigation.jsx";
import TopNavigationBar from "./components/layout/TopNavigation/TopNavigationBar.jsx";
import componentsList from "./componentsList.jsx";
import appStyles from "./App.module.css";
import LatestComponentBanner from "./components/layout/LatestComponentBanner.jsx";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(componentsList[0]);
  const [isClosing, setIsClosing] = useState(false);
  const [latestComponentBanner, setLatestComponentBanner] = useState(true);

  const handleBannerClose = () => {
    setIsClosing(true);
    setTimeout(() => setLatestComponentBanner(false), 200);
  };

  return (
    <div className={appStyles.mainContainer}>
      <div className={appStyles.topNavContainer}>
        <TopNavigationBar
          componentsList={componentsList}
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
        />
      </div>
      {latestComponentBanner && (
        <LatestComponentBanner
          handleBannerClose={handleBannerClose}
          isClosing={isClosing}
          componentsList={componentsList}
          setCurrentComponent={setCurrentComponent}
        />
      )}
      <div className={appStyles.bottomContainer}>
        <SideNavigation
          componentsList={componentsList}
          currentComponent={currentComponent}
          component={currentComponent}
          setCurrentComponent={setCurrentComponent}
        />
        <div className={appStyles.mainWindow}>
          <MainWindow currentComponent={currentComponent} />
        </div>
      </div>
    </div>
  );
};

export default App;
