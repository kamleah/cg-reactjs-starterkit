import React from "react";
import "./Badges.css";
function Badges({ items, backgroundColor }) {
  return (
    <span className="CartBadges" style={backgroundColor && { backgroundColor }}>
      {items}
    </span>
  );
}

export default Badges;
