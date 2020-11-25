import React from "react";
import LinkHeader from "./LinkHeader";

export default {
  title: "Header&Footer/LinkHeader",
  component: LinkHeader,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const LinkHeaderTemplates = (args) => <LinkHeader {...args} />;
export const ViewLinkHeader = LinkHeaderTemplates.bind({});
