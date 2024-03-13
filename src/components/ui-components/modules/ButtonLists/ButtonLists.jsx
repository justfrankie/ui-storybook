import React from "react";
import Button from "../../Button";
import styles from "./ButtonList.module.css";
const ButtonList = () => {
  return (
    <div className={styles.container}>
      <Button text="Primary" theme="primary" />
      <Button text="Secondary" theme="secondary" />
      <Button text="Accent" theme="accent" />
    </div>
  );
};

export default ButtonList;
