import React from "react";
import SliderWithDots from "./SliderWithDots";

export default {
  title: "Carousel/SliderWithDots",
  component: SliderWithDots,
  argTypes: {},
};
const SliderWithDotsTemplates = (args) => <SliderWithDots {...args} />;
export const ViewSliderWithDots = SliderWithDotsTemplates.bind({});
