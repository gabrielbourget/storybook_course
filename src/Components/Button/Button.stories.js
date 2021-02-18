import React from "react";
import Button from "./Button";

const storyInfo = {
  title: "Button",
  component: Button,
};

export default storyInfo;

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Primary</Button>
export const Success = () => <Button variant="success">Primary</Button>
export const Danger = () => <Button variant="danger">Primary</Button>
