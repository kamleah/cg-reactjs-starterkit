import React from "react";
import PropTypes from "prop-types";
import "./search.css";
function Search({ backgroundColor, color, ...props }) {
  return (
    <div className="Search">
      <button
        type="submit"
        className="SearchButton"
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        <p style={color && { color }}>Search</p>
      </button>
    </div>
  );
}

Search.propTypes = {
  backgroundColor: PropTypes.string,
};
Search.defaultProps = {
  backgroundColor: null,
};
export default Search;
