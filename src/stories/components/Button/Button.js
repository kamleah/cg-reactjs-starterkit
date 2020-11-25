import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
function Button({ backgroundColor, color, buttonTitle, ...props }) {
  return (
    <div>
      <button
        className="buyNow"
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        <p style={color && { color }}>{buttonTitle}</p>
      </button>
    </div>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  buttonTitle: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  backgroundColor: null,
  color: null,
  buttonTitle: "Button",
  onClick: undefined,
};

export default Button;
