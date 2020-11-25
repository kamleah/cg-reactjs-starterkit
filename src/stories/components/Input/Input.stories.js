import React from "react";
import Input from "./Input";

export default {
  title: "Inputs Tags/InputSearch",
  component: Input,
};

const InputTemplates = (args) => <Input {...args} />;
export const InputSearch = InputTemplates.bind({});
