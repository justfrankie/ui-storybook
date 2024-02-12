import React from "react";
import styles from "./SideNavigation.module.css";

const SideNavigation = ({
  currentComponent,
  setCurrentComponent,
  componentsList,
}) => {
  const handleClick = (newData) => {
    setCurrentComponent((prevComponent) => ({ ...prevComponent, ...newData }));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        {componentsList.map((item, index) => (
          <li
            key={index}
            className={`${styles.navItem} ${styles.hoverEffect} ${
              item.id === currentComponent.id && styles.selectedNav
            }`}
            onClick={() => handleClick(item)}
          >
            <div className={styles.navItemNameText}>{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
