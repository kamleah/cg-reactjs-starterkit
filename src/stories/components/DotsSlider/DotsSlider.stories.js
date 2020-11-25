import React from "react";
import DotsSlider from "./DotsSlider";

export default {
  title: "Carousel/DotsSlider",
  component: DotsSlider,
};

const DotsSliderTemplates = (args) => <DotsSlider {...args} />;
export const ViewDotsSlider = DotsSliderTemplates.bind({});
