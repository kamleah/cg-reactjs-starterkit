import React from "react";
import Header from "./Header";

export default {
  title: "Header&Footer/Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const HeaderTemplates = (args) => <Header {...args} />;
export const ViewHeader = HeaderTemplates.bind({});
