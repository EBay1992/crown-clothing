import React from "react";
import "./Input.styles.scss";

const FormInput = ({ id, label, onChange, ...otherProps }) => {
  return (
    <div className="group">
      <input
        id={id}
        className="form-input"
        onChange={(e) => {
          onChange(e);
        }}
        {...otherProps}
      />
      {label ? (
        <label
          htmlFor={id}
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
