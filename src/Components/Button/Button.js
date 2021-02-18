import React from "react";
import { css } from "aphrodite";
import { styleGen } from "./ButtonStyles";

const Button = (props) => {
  const { children, ...rest } = props;
  console.log("props -> ", props);
  console.log("styles -> ", styleGen());
  const buttonStylechain = calibrateComponent(props, styleGen);
  
  return (
    <button className={buttonStylechain} {...rest}>
      {children}
    </button>
  );
}

export default Button;

const calibrateComponent = (props, styleGen) => {
  const { variant = "primary" } = props;
  const {
    primary, secondary, success, danger, button,
  } = styleGen();
  let extraButtonStyle = primary;
  
  switch (variant) {
    case "primary":
      extraButtonStyle = primary;
      break;
    case "secondary":
      extraButtonStyle = secondary;
      break;
    case "success":
      extraButtonStyle = success;
      break;
    case "danger":
      extraButtonStyle = danger;
      break;
    default: break;
  }

  const buttonStylechain = css(button, extraButtonStyle);

  return buttonStylechain;
}