import React, { useState } from "react";
import packageJson from "../../../../package.json";
import SearchBar from "../../ui-components/SearchBar";
import topNavStyles from "./TopNavigationBar.module.css";
import { Link } from "react-router-dom";
import { useMobile } from "../../../contexts/mobileProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const topListNav = ["Home", "Docs", "GitHub"];

const TopNavigationBar = ({
  currentComponent,
  setCurrentComponent,
  componentsList,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useMobile();

  const MobileHamburgerMenu = () => {
    return (
      <div style={{ marginLeft: "15px" }}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    );
  };
  return (
    <div className={topNavStyles.container}>
      <div className={topNavStyles.leftSection}>
        <div className={topNavStyles.logoContainer}>
          {/* Icon Placeholder */}
          <span className={topNavStyles.iconPlaceholder}>📚</span>
          {/* Hero Title */}
          <Link to="/">
            <span className={topNavStyles.heroTitle}>UI Storybook</span>
          </Link>
        </div>
        {/* Version Number */}
        <span className={topNavStyles.versionNumber}>
          v{packageJson.version}
        </span>
      </div>

      <div className={topNavStyles.rightSection}>
        {topListNav && componentsList && (
          <>
            <SearchBar
              currentComponent={currentComponent}
              setSearchQuery={setSearchQuery}
              searchQuery={searchQuery}
              setCurrentComponent={setCurrentComponent}
              componentsList={componentsList}
            />
            {isMobile ? (
              <MobileHamburgerMenu />
            ) : (
              <ul className={topNavStyles.topNavItems}>
                {topListNav.map((item, index) => (
                  <li key={index} className={topNavStyles.topNavItem}>
                    <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TopNavigationBar;
