import React from "react";

import Header from "./Header";

export default {
  title: "Example/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const SubHeader = Template.bind({});
SubHeader.args = {
  title: "ACME",
  subHeader: true,
};
