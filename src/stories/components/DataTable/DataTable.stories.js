import React from "react";
import DataTable from "./DataTable";

export default {
  title: "Views/DataTable Component",
  component: DataTable,
};

const Template = (args) => <DataTable {...args} />;

export const ViewResults = Template.bind({});
