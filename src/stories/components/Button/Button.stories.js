import React from "react";
import Button from "./Button";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    onClick: { action: "clicked" },
  },
};

const ButtonTemplates = (args) => <Button {...args} />;
export const ViewButton = ButtonTemplates.bind({});
