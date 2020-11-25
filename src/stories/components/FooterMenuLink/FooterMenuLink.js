import React from "react";
import "./FooterMenuLink.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function FooterMenuLink({ FooterMenuLinks, FooterMenuTitles }) {
  return (
    <Router>
      <ul>
        <li>
          <Link to={FooterMenuLinks}>
            <small>{FooterMenuTitles}</small>
          </Link>
        </li>
      </ul>
    </Router>
  );
}
