import React from "react";
import Arrow from "./Arrow";

export default {
  title: "Carousel/Arrow",
  component: Arrow,
  argTypes: {},
};
const ArrowTemplates = (args) => <Arrow {...args} />;
export const ViewSliderWithDots = ArrowTemplates.bind({});
