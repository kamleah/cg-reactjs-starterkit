import React from "react";
import SliderWithText from "./SliderWithText";

export default {
  title: "Carousel/SliderWithText",
  component: SliderWithText,
  argTypes: {
    TextOneColor: { control: "color" },
    color: { control: "color" },
    TextTwoColor: { control: "color" },
  },
};

const SliderWithTextTemplates = (args) => <SliderWithText {...args} />;
export const ViewSliderWithText = SliderWithTextTemplates.bind({});
