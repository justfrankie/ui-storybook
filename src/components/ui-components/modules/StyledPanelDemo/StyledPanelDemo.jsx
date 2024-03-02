import React from "react";
import StyledPanel from "../../StyledPanel";
import styles from "./StyledPanelDemo.module.css";

const StyledPanelDemo = () => {
  return (
    <div>
      <div className={styles.margin20}>Primary Color:</div>
      <ul className={styles.flexContainer}>
        {[1, 2, 3].map((item, index) => (
          <li className={styles.marginAuto} key={index}>
            <StyledPanel>Panel {index + 1}</StyledPanel>
          </li>
        ))}
      </ul>
      <div className={styles.margin20}>Secondary Color:</div>
      <ul className={styles.flexContainer}>
        {[1, 2, 3].map((item, index) => (
          <li className={styles.marginAuto} key={index}>
            <StyledPanel theme="secondary">Panel {index + 1}</StyledPanel>
          </li>
        ))}
      </ul>
      <div className={styles.margin30}>
        <StyledPanel>
          <div className={styles.margin20Auto}>
            <h1>Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </StyledPanel>
      </div>
    </div>
  );
};

export default StyledPanelDemo;
