import React from "react";
import Footer from "./Footer";

export default {
  title: "Header&Footer/Footer",
  component: Footer,
  argTypes: {
    backgroundColor: { control: "color" },
    background: { control: "color" },
    color: { control: "color" },
  },
};

const FooterTemplates = (args) => <Footer {...args} />;
export const ViewFooter = FooterTemplates.bind({});
