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

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Primary</Button>
export const Success = () => <Button variant="success">Primary</Button>
export const Danger = () => <Button variant="danger">Primary</Button>

const Template = (props) => <Button {...props} />

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args"
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args"
}

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args"
}
