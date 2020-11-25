import React from "react";
import PropTypes from "prop-types";
import "./Input.css";
function Input({ type, placeholder, value, background, ...props }) {
  return (
    <div className="InputDiv">
      <input
        className="SearchInput"
        type={type}
        placeholder={placeholder}
        value={value}
        style={{ background: background }}
        {...props}
      />
    </div>
  );
}
Input.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "search",
    "number",
    "email",
    "password",
    "submit",
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  background: PropTypes.string,
};
export default Input;
