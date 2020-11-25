import React from "react";
import ProductCart from "./ProductCart";

export default {
  title: "Cards/ProductCart",
  component: ProductCart,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const ProductCartTemplates = (args) => <ProductCart {...args} />;
export const ViewProductCart = ProductCartTemplates.bind({});
