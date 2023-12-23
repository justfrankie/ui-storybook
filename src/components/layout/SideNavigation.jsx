// SideNavigation.js

import React from "react";
import styles from "./SideNavigation.module.css";

const SideNavigation = ({ setCurrentComponent, navItems }) => {
  const handleClick = (newData) => {
    setCurrentComponent((prevComponent) => ({ ...prevComponent, ...newData }));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={
              index < navItems.length
                ? `${styles.navItemWithBorder} ${styles.hoverEffect}`
                : `${styles.navItem} ${styles.hoverEffect}`
            }
            onClick={() => handleClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
