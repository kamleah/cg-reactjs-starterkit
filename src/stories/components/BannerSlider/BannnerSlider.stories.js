import React from "react";
import BannerSlider from "./BannerSlider";

export default {
  title: "Carousel/BannerSlider",
  component: BannerSlider,
};

const BannerSliders = (args) => <BannerSlider {...args} />;
export const ViewBannerSlider = BannerSliders.bind({});
