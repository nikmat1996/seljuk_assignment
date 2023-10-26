import React from "react";
import "../styles/Button.css";

const ButtonGradient = ({ children }) => {
  return (
    <div className="buttonWrap gradientColor">
      <button className="button">{children}</button>
    </div>
  );
};

export default ButtonGradient;
