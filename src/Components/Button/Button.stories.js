import React from "react";
import Button from "./Button";

const storyInfo = {
  title: "Button",
  component: Button,
  args: {
    children: "button",
  }
};

export default storyInfo;

const Template = (props) => <Button {...props} />

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary"
}

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success"
}
export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger"
}
