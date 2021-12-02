import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
  let styles = { bgColor: "" };

  return (
    <button
      style={{ backgroundColor: styles.bgColor }}
      className="custom-button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
