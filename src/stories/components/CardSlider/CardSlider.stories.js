import React from "react";
import CardSLider from "./CardSLider";

export default {
  title: "Carousel/CardSlider",
  component: CardSLider,
};

const CardSlider = (args) => <CardSLider size="cardSlider" {...args} />;
export const ViewCardSlider = CardSlider.bind({});
