import React from "react";
import "./Header.css";
import Input from "../Input/Input";
import Search from "../Search/Search";
import Badges from "../Badges/Badges";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";
function Header() {
  return (
    <>
      <div className="iskartHeader">
        <div className="LogoSection">
          <Logo />
        </div>
        <div className="HeaderSection">
          <Input />
          <Search />
        </div>
        <div className="cartSections">
          <Cart />
          <Badges items="5" />
        </div>
      </div>
    </>
  );
}
Header.propTypes = {};
Header.defaultProps = {};

export default Header;
