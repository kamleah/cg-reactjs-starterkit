import React from "react";
import Slider from "./Slider";

export default {
  title: "Carousel/Slider",
  component: Slider,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};
const SliderTemplates = (args) => <Slider {...args} />;
export const ViewSlider = SliderTemplates.bind({});
