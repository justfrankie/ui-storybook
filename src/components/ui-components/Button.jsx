import React from "react";
import buttonStyles from "./Button.module.css";

const Button = ({ theme = "primary", text, children, onClick }) => {
  return (
    <button
      className={`${buttonStyles.buttonStyle} ${buttonStyles[theme]}`}
      onClick={onClick}
    >
      {text || children}
    </button>
  );
};

export default Button;
