import React from "react";
import Logo from "./Logo";

export default {
  title: "Header&Footer/Logo",
  component: Logo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const LogoTemplates = (args) => <Logo {...args} />;
export const ViewLogo = LogoTemplates.bind({});
