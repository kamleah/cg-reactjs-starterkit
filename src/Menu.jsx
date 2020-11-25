import React from "react";
import { Link,NavLink } from "react-router-dom";
import { HomeConstants } from '../src/pages/Home/mockjson/home_details';
const Menu = () =>{
  const menuDetails = HomeConstants.MENU
    return (
        <div>
          <nav className="navbar navbar-expand-lg  navbar-dark bg-primary justify-content-center">     
            <ul className="nav justify-content-center">
                {menuDetails.map(name => (
                             <li className="nav-item">
                             <NavLink exact activeClassName="activate" className="nav-link text-white text-uppercase" to={name.key}>{name.value}</NavLink>
                             </li>
                        ))} 
              </ul> 
          </nav>
        </div>

        )
};

export default Menu;
