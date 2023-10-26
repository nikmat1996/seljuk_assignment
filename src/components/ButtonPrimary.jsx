import React from "react";
import "../styles/Button.css";

const ButtonPrimary = ({ children }) => {
  return (
    <div className="buttonWrap primaryColor">
      <button className="button">{children}</button>
    </div>
  );
};

export default ButtonPrimary;
