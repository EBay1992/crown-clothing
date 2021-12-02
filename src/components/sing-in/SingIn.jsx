import React, { useState } from "react";

import CustomButton from "../Button/CustomButton";
import FormInput from "../Input/FormInput";
import "./SingIn.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utility";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };
  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={onEmailChangeHandler}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={onPasswordChangeHandler}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          Sign in with goolge
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
