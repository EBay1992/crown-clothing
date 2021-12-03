import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      className={`${
        otherProps?.isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
