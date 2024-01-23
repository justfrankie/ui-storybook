import React, { useState } from "react";
import packageJson from "../../../package.json";
import SearchBar from "../ui-components/SearchBar";
import topNavStyles from "./TopNavigationBar.module.css"; // Import the CSS module

const topListNav = ["Home", "Docs", "GitHub"];

const TopNavigationBar = ({
  currentComponent,
  setCurrentComponent,
  componentsList,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={topNavStyles.container}>
      <div className={topNavStyles.leftSection}>
        <div className={topNavStyles.logoContainer}>
          {/* Icon Placeholder */}
          <span className={topNavStyles.iconPlaceholder}>📚</span>
          {/* Hero Title */}
          <span className={topNavStyles.heroTitle}>UI Storybook</span>
        </div>
        {/* Version Number */}
        <span className={topNavStyles.versionNumber}>
          v{packageJson.version}
        </span>
      </div>

      <div className={topNavStyles.rightSection}>
        {/* Search Bar */}
        <SearchBar
          currentComponent={currentComponent}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          setCurrentComponent={setCurrentComponent}
          componentsList={componentsList}
        />
        {/* GitHub Nav List Items */}
        <ul className={topNavStyles.githubNav}>
          {topListNav.map((item, index) => (
            <li key={index} className={topNavStyles.githubNavItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNavigationBar;
