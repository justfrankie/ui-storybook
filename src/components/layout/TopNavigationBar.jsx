import React, { useState } from "react";
import packageJson from "../../../package.json";
import moduleStyles from "./TopNavigationBar.module.css";
const topListNav = ["Home", "Docs", "GitHub"];

const SearchBar = ({
  setSearchQuery,
  setCurrentComponent,
  searchQuery,
  navItems,
}) => {
  const [searchResultsOpen, setSearchResultsOpen] = useState(false);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (newData) => {
    setSearchResultsOpen(false);
    setSearchQuery("");
    setCurrentComponent((prevComponent) => ({ ...prevComponent, ...newData }));
  };

  return (
    <div className={moduleStyles.searchBarContainer}>
      <input
        type="text"
        name="search"
        value={searchQuery}
        placeholder="Search"
        className={`${moduleStyles.searchResultsInput} ${
          searchResultsOpen && moduleStyles.searchBarResultsActive
        }`}
        onChange={(e) => handleChange(e)}
      />
      {searchQuery.length > 0 && (
        <div className={moduleStyles.searchResults}>
          <ul className={moduleStyles.searchResultsContainer}>
            {navItems
              .filter((item) => {
                const itemMatchFound = item.name
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase());
                if (!searchResultsOpen && itemMatchFound)
                  setSearchResultsOpen(true);
                return itemMatchFound;
              })
              .map((item, index) => (
                <li
                  className={moduleStyles.searchResultItem}
                  key={index}
                  onClick={() => handleClick(item)}
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const TopNavigationBar = ({
  currentComponent,
  setCurrentComponent,
  navItems,
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
          navItems={navItems}
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
    fontSize: "14px",
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
