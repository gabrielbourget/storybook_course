import React from "react";
import { Button } from "@chakra-ui/core";

const storyInfo = {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" }
  }
};

export default storyInfo;

const Template = (props) => <Button {...props} />

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success"
}

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger"
}

export const Log = Template.bind({});
Log.args = {
  variantColor: "blue",
  onClick: () => console.log("button clicked"),
  children: "Log button"
}