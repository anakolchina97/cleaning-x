import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    size: {
      options: ["small", "large"],
      control: { type: "radio" },
    },
    full: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  text: "Button",
};
