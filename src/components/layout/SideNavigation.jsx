import React from "react";

const SideNavigation = ({ setCurrentComponent, navItems }) => {
  const handleClick = (newData) => {
    setCurrentComponent((prevComponent) => ({ ...prevComponent, ...newData }));
  };

  return (
    <div style={styles.container}>
      <ul style={styles.navList}>
        {navItems.map((item, index) => (
          <li
            key={index}
            style={
              index < navItems.length - 1
                ? styles.navItemWithBorder
                : styles.navItem
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

const styles = {
  container: {
    padding: "10px",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  navItem: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
  },
  navItemWithBorder: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
    borderRight: "1px solid #ddd",
  },
};

export default SideNavigation;
