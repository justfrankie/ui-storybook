import React from "react";
import Button from "../../Button";
import styles from "./ButtonList.module.css";
const ButtonList = () => {
  return (
    <div className={styles.container}>
      <Button text="Style One" theme="primary" />
      <Button text="Style One" theme="secondary" />
      <Button text="Style One" theme="accent" />
    </div>
  );
};

export default ButtonList;
