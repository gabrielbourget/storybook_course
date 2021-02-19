import React from "react";
import Input from "./Input";

const storyInfo = {
  title: "Input",
  component: Input,
};

export default storyInfo;

// Small.storyName = "Small Input";

const Template = (props) => <Input {...props} />

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "Small Size"
}

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  placeholder: "Medium Size"
}
export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Large"
}
