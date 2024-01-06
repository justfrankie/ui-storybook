import React, { useState } from "react";
import packageJson from "../../../package.json";
import SearchBar from "../ui-components/SearchBar";
import { Link } from "react-router-dom";
import navStyles from "./TopNavigationBar.module.css"; // Import the CSS module

const topListNav = ["Home", "Docs", "GitHub"];

const TopNavigationBar = ({
  currentComponent,
  setCurrentComponent,
  componentsList,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={navStyles.container}>
      <div className={navStyles.leftSection}>
        <div className={navStyles.logoContainer}>
          {/* Icon Placeholder */}
          <span className={navStyles.iconPlaceholder}>📚</span>
          {/* Hero Title */}
          <span className={navStyles.heroTitle}>UI Storybook</span>
        </div>
        {/* Version Number */}
        <span className={navStyles.versionNumber}>v{packageJson.version}</span>
      </div>

      <div className={navStyles.rightSection}>
        {/* Search Bar */}
        <SearchBar
          currentComponent={currentComponent}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          setCurrentComponent={setCurrentComponent}
          componentsList={componentsList}
        />
        {/* GitHub Nav List Items */}
        <ul className={navStyles.githubNav}>
          {topListNav.map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`}>
              <li className={navStyles.githubNavItem}>{item}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNavigationBar;
