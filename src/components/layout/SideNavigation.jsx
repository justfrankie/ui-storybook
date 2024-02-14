import React, { useState } from "react";
import sideNavStyles from "./SideNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SideNavigation = ({
  currentComponent,
  setCurrentComponent,
  componentsList,
}) => {
  const [isCondensed, setIsCondensed] = useState(false);

  const handleClick = (newData) => {
    setCurrentComponent((prevComponent) => ({ ...prevComponent, ...newData }));
  };

  const handleCondenseClick = () => {
    setIsCondensed(!isCondensed);
  };

  return (
    <div
      className={`${sideNavStyles.container} ${
        isCondensed ? sideNavStyles["condensed-nav"] : ""
      }`}
    >
      <div className={sideNavStyles.condenseButtonContainer}>
        <FontAwesomeIcon
          icon={faBars}
          className={sideNavStyles.condenseButton}
          onClick={handleCondenseClick}
        />
      </div>
      <ul className={sideNavStyles.navList}>
        {!isCondensed &&
          componentsList.map((item, index) => (
            <li
              key={index}
              className={`${sideNavStyles.navItem} ${
                sideNavStyles.hoverEffect
              } ${
                item.id === currentComponent.id && sideNavStyles.selectedNav
              }`}
              onClick={() => handleClick(item)}
            >
              <div className={sideNavStyles.navItemNameText}>{item.name}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
