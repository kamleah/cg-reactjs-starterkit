import React from "react";
import Badges2 from "./Badges2";

export default {
  title: "Badges/Rectangular Badges",
  component: Badges2,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Badges2Templates = (args) => <Badges2 items="5" {...args} />;
export const ViewBadges = Badges2Templates.bind({});
