import React from "react";
import "./SingInAndSingUp.styles.scss";

import SingIn from "../../components/sing-in/SingIn";
import SingUp from "../../components/sing-up/SingUp";

const singInAndSingUp = () => {
  return (
    <div className="signIn-singUp-page">
      <SingIn className="signIn" />
      <SingUp className="signUp" />
    </div>
  );
};

export default singInAndSingUp;
