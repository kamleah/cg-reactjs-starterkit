import React from "react";
import PropTypes from "prop-types";
import "./Badges2.css";
function Badges2({ items, backgroundColor }) {
  return (
    <span
      className="rectangularBadges"
      style={backgroundColor && { backgroundColor }}
    >
      {items} %{" "}
    </span>
  );
}

Badges2.propTypes = {
  items: PropTypes.string,
  backgroundColor: PropTypes.string,
};
Badges2.defaultProps = {
  items: "5",
  backgroundColor: "aquamarine",
};

export default Badges2;
