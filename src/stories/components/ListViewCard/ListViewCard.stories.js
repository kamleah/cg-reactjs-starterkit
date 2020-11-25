import React from "react";
import ListViewCard from "./ListViewCard";

export default {
  title: "Cards/ListViewCard",
  component: ListViewCard,
  argTypes: {
    TextOneColor: { control: "color" },
    backgroundColor: { control: "color" },
    comment: { control: "color" },
    commentBackground: { control: "color" },
    borderColor: { control: "color" },    
  },
};

const ListViewCardTemplates = (args) => <ListViewCard {...args} />;
export const ViewListViewCard = ListViewCardTemplates.bind({});
