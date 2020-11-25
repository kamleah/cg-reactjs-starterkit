import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header2.css";
export const Header2 = ({ HeaderData }) => {
  return (
    <div className="menus">
      <div className="logo">
        {HeaderData.map((item, key) => (
          <img
            src={item.logo.imgUrl}
            width="60"
            alt={item.logo.alt}
            style={item.logo}
          />
        ))}
      </div>
      <div className="menu-bar">
        <ul>
          {HeaderData.map((item, key) =>
            item.menuItems.map((menu) => (
              <Router>
                <li>
                  <Link to="/">{menu.name}</Link>

                  <div className="sub-menu-1">
                    <ul>
                      {menu.subMenuItems.map((submenu) => (
                        <Router>
                          <li>
                            <Link to={`/${submenu.url}`}>{submenu.name}</Link>
                          </li>
                        </Router>
                      ))}
                    </ul>
                  </div>
                </li>
              </Router>
            ))
          )}
        </ul>
      </div>
      <div className="last-content">
        <div class="col">
          {HeaderData[0].searchBox === true ? (
            <input type="search" placeholder="Search" />
          ) : (
            ""
          )}
        </div>
        <div class="col">
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

Header2.propTypes = {
  HeaderData: PropTypes.array,
};
Header2.defaultProps = {
  HeaderData: [
    {
      background: {
        imgUrl:
          "http://thecareforum.co.uk/wp-content/uploads/2016/06/Sky-Logo-1.png",
        opacity: 1,
        color: "#ff0000",
      },
      logo: {
        imgUrl:
          "http://thecareforum.co.uk/wp-content/uploads/2016/06/Sky-Logo-1.png",
        opacity: 1,
        position: "left",
        alt: "logo",
      },
      menuItems: [
        {
          name: "Prepaid",
          url: "abc.com",
          subMenuItems: [
            {
              name: " Prepaid PlanA",
              url: "abc.com",
            },
            {
              name: "Prepaid PlanB",
              url: "abc.com",
            },
            {
              name: "Prepaid PlanC",
              url: "abc.com",
            },
          ],
        },
        {
          name: "Postpaid",
          url: "abc.com",
          subMenuItems: [
            {
              name: "Postpaid PlanA",
              url: "abc.com",
            },
            {
              name: "Postpaid PlanB",
              url: "abc.com",
            },
          ],
        },
        {
          name: "PostpaidB",
          url: "abc.com",
          subMenuItems: [
            {
              name: "PostpaidB PlanA",
              url: "abc.com",
            },
            {
              name: "PostpaidB PlanB",
              url: "abc.com",
            },
          ],
        },
      ],
      searchBox: true,
      login: {
        status: true,
        redirectionUrl: "/login",
        redirectionType: "external/internal",
      },
      register: {
        status: true,
        redirectionUrl: "/register",
        redirectionType: "external/internal",
      },
    },
  ],
};

export default Header2;
