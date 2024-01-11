import React, { useState } from "react";
import packageJson from "../../../package.json";
import SearchBar from "../ui-components/SearchBar";
const topListNav = ["Home", "Docs", "GitHub"];

const TopNavigationBar = ({
  currentComponent,
  setCurrentComponent,
  componentsList,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <div style={styles.logoContainer}>
          {/* Icon Placeholder */}
          <span style={styles.iconPlaceholder}>📚</span>
          {/* Hero Title */}
          <span style={styles.heroTitle}>UI Storybook</span>
        </div>
        {/* Version Number */}
        <span style={styles.versionNumber}>v{packageJson.version}</span>
      </div>

      <div style={styles.rightSection}>
        {/* Search Bar */}
        <SearchBar
          currentComponent={currentComponent}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          setCurrentComponent={setCurrentComponent}
          componentsList={componentsList}
        />
        {/* GitHub Nav List Items */}
        <ul style={styles.githubNav}>
          {topListNav.map((item, index) => (
            <li key={index} style={styles.githubNavItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// TODO convert this to modules styles
const styles = {
  container: {
    backgroundColor: "#1a2b34",
    color: "#fff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
  },
  iconPlaceholder: {
    fontSize: "24px",
    marginRight: "8px",
  },
  heroTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  versionNumber: {
    fontSize: "12px",
    color: "rgb(226, 81, 119)",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },

  githubNav: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  },
  githubNavItem: {
    margin: "0 8px",
    cursor: "pointer",
  },
};

export default TopNavigationBar;
