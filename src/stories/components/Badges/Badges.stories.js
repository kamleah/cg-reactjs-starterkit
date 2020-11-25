import React from "react";
import Badges from "./Badges";

export default {
  title: "Badges/Circular Badges",
  component: Badges,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const BadgesTemplates = (args) => <Badges items="5" {...args} />;
export const ViewBadges = BadgesTemplates.bind({});
