import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function FooterLink({ logoUrl, logoImg, logoAlt }) {
  return (
    <div className="right1">
      <Router>
        <div className="twitter hover">
          <Link to={logoUrl}>
            <img src={logoImg} alt={logoAlt} height="50px"></img>
          </Link>
        </div>
      </Router>
    </div>
  );
}
