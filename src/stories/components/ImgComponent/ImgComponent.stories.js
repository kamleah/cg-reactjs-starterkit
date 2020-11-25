import React from "react";
import ImgComponent from "./ImgComponent";
export default {
  title: "Form/Img",
  component: ImgComponent,
};
export const img = () => (
  <ImgComponent
    ImgSrc="http://allhdwallpapers.com/wp-content/uploads/2016/07/Wood-3.jpg"
    alt="images"
    height={250}
    width={150}
  ></ImgComponent>
);
