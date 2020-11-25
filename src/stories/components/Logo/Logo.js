import React from "react";
import PropTypes from "prop-types";
import "./Logo.css";
function Logo({ img, imgalt, backgroundColor }) {
  return (
    <div className="LogoSection" style={backgroundColor && { backgroundColor }}>
      <img src={img} alt={imgalt} height="50" />
    </div>
  );
}
Logo.propTypes = {
  img: PropTypes.string,
  imgalt: PropTypes.string,
  backgroundColor: PropTypes.string,
};
Logo.defaultProps = {
  img:
    "https://th.bing.com/th/id/OIP.LgboDRAvGDzEkWaojRhJjQHaEC?w=277&h=180&c=7&o=5&pid=1.7",
  imgalt: "Best Online Shopping",

  backgroundColor: null,
};
export default Logo;
