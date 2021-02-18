import React from "react";
import { css } from "aphrodite";
import { styleGen } from "./InputStyles";

const Input = (props) => {
  const { size, ...rest } = props;
  const inputStylechain = calibrateComponent(props, styleGen);

  return (
    <input className={inputStylechain} {...rest} />
  );
}

export default Input;

const calibrateComponent = (props, styleGen) => {
  const { size = "primary" } = props;
  const {
    small, medium, large, input,
  } = styleGen();
  let extraInputStyle = small;
  
  switch (size) {
    case "small":
      extraInputStyle = small;
      break;
    case "medium":
      extraInputStyle = medium;
      break;
    case "large":
      extraInputStyle = large;
      break;
    default: break;
  }

  const inputStylechain = css(input, extraInputStyle)

  return inputStylechain;
}
