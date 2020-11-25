import React from "react";
import PropTypes from "prop-types";
import "./LinkHeader.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

function LinkHeader({ backgroundColor, color, LinkHeaderData }) {
  return (
    <div className="linkHeader" style={backgroundColor && { backgroundColor }}>
      <Router style={color && { color }}>
        {LinkHeaderData.map((item) => (
          <div key={item}>
            <Link to={item.HeaderLink} style={color && { color }}>
              {item.HeaderName}
            </Link>
          </div>
        ))}
      </Router>
    </div>
  );
}

LinkHeader.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  LinkHeaderData: PropTypes.array,
};
LinkHeader.defaultProps = {
  backgroundColor: "rgba(125,111,194,1)",
  color: "rgba(21,9,80,1)",
  LinkHeaderData: [
    {
      HeaderName: "Home",
      HeaderLink: "home.html",
    },
    {
      HeaderName: "Shop",
      HeaderLink: "Shop.html",
    },
    {
      HeaderName: "Vendor Registration",
      HeaderLink: "Vendor_Registration.html",
    },
    {
      HeaderName: "My Accounts",
      HeaderLink: "accounts.html",
    },
    {
      HeaderName: "Checkouts",
      HeaderLink: "checkouts.html",
    },
    {
      HeaderName: "FAQs",
      HeaderLink: "faqs.html",
    },
  ],
};

export default LinkHeader;
