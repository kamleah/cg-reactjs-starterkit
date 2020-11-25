import React from "react";
import Search from "./Search";

export default {
  title: "Buttons/Search",
  component: Search,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    onClick: { click: "Clicked" },
  },
};

const SearchTemplates = (args) => <Search {...args} />;
export const ViewSearch = SearchTemplates.bind({});
