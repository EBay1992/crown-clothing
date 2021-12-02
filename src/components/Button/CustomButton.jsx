import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  console.log(isGoogleSignIn, "line5");
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
