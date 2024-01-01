import React from "react";
import buttonStyles from "./Button.module.css";

const Button = ({ theme = "primary", text }) => {
  return (
    <button className={`${buttonStyles.buttonStyle} ${buttonStyles[theme]}`}>
      {text}
    </button>
  );
};

export default Button;
