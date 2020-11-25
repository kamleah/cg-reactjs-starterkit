import React from "react";
import "./LinkButton.css";
import "../Button/Button.css";

export default function LinkButton(props) {
  const { varient = "primarys", size, children, href, ...rest } = props;
  return (
    <div>
      <div className={`buttons ${varient}`} {...rest}>
        <a href={href} size={size} className="text-decoration">
          {children}
        </a>
      </div>
    </div>
  );
}
