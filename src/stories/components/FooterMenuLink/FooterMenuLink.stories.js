import React from "react";
import FooterMenu from "./FooterMenuLink";

export default {
  title: "Header&Footer/FooterMenuLink",
  component: FooterMenu,
};

export const FooterMenuLinks = () => (
  <FooterMenu FooterMenuLinks="abc.html" FooterMenuTitles="Abc" />
);
