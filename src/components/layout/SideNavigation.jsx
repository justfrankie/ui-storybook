// SideNavigation.js

import React from "react";
import styles from "./SideNavigation.module.css";

const SideNavigation = ({
  currentComponent,
  setCurrentComponent,
  navItems,
}) => {
  const handleClick = (newData) => {
    setCurrentComponent((prevComponent) => ({ ...prevComponent, ...newData }));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${styles.navItem} ${styles.hoverEffect} ${
              item.id === currentComponent.id && styles.selectedNav
            }`}
            onClick={() => handleClick(item)}
          >
            <span className={styles.navItemNameText}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
