import React from "react";
import "./ImgComponent.css";

export default function ImgComponent(props) {
  const { ImgSrc, alt, height, width, ...rest } = props;

  return (
    <div {...rest}>
      <img src={ImgSrc} alt={alt} height={height} width={width}></img>
    </div>
  );
}
