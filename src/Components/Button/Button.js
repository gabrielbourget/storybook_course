import React from "react";
import { css } from "aphrodite";
import { styleGen } from "./ButtonStyles";

const Button = (props) => {
  const { variant = "primary", children, ...rest } = props;
  const { } = styleGen();
  
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
