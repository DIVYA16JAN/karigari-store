import React from "react";

const FormInput = ({ ChangeHandler, label, ...OtherInputProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={ChangeHandler}
      {...OtherInputProps}
    />
    {label ? (
      <label
        className={`${
          OtherInputProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {" "}
        {label}
      </label>
    ) : (
      ""
    )}
  </div>
);

export default FormInput;
