import React from "react";
import { css, StyleSheet } from "aphrodite";

const Center = (props) => {
  const { children } = props;
  const { center } = styleGen();

  return (
    <div className={css(center)}>
      { children }
    </div>
  );
}

const styleGen = () => (StyleSheet.create({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}));

export default Center;
