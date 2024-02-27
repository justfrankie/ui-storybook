import React, { useState, useEffect } from "react";
import sideNavStyles from "./SideNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMobile } from "../../contexts/mobileProvider";

const SideNavigation = ({
  currentComponent,
  setCurrentComponent,
  componentsList,
}) => {
  const isMobile = useMobile();
  const [isCondensed, setIsCondensed] = useState(isMobile ? true : null);

  const handleClick = (newData) => {
    setCurrentComponent((prevComponent) => ({ ...prevComponent, ...newData }));
    if (isMobile) {
      setIsCondensed(true);
    }
  };

  const handleCondenseClick = () => {
    setIsCondensed(isCondensed === null ? true : !isCondensed);
  };

  useEffect(() => {
    // Function to check if the viewport width is less than 768px (typical mobile devices)

    // Set isCondensed state based on viewport width
    setIsCondensed(isMobile);

    // Event listener to update isCondensed state on window resize
    const handleResize = () => {
      setIsCondensed(isMobile);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`${sideNavStyles.sideNav} ${
        isMobile && !isCondensed ? sideNavStyles["absolute-nav"] : ""
      }`}
    >
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
        <ul className={`${sideNavStyles.navList}`}>
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
    </nav>
  );
};

export default SideNavigation;
