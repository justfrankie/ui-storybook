import React from "react";
import buttonStyles from "./Buttons.module.css";

const Buttons = () => {
  return (
    <div>
      <button className={`${buttonStyles.styleOne} ${buttonStyles.primary}`}>
        Style 1
      </button>
      <button className={`${buttonStyles.styleOne} ${buttonStyles.secondary}`}>
        Style 2
      </button>
      <button className={`${buttonStyles.styleOne} ${buttonStyles.accent}`}>
        Style 3
      </button>
    </div>
  );
};

export default Buttons;
