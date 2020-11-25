import React from "react";
import LinkButton from "./LinkButton";

export default {
  title: "Form/LinkButton",
  component: LinkButton,
};

export const Primary = () => (
  <LinkButton
    varient="primarys"
    size="smalls"
    href="https://ves.ac.in/vesit/wp-content/uploads/sites/3/2019/05/MCA-Choice-Based-Syllabus.pdf"
  >
    Primary
  </LinkButton>
);
export const Secondary = () => (
  <LinkButton varient="secondarys" href="https://www.instagram.com/?hl=en">
    Secondary
  </LinkButton>
);
