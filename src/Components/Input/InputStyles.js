import { StyleSheet } from "aphrodite";

export const styleGen = (props) => (StyleSheet.create({
  input: {
    display: "block",
    width: 400,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderRadius: "0.25rem",
    border: "1px solid",
    borderColor: "inherit",
    backgroundColor: "#FFF",
  },
  small: {
    height: "2rem",
    fontSize: "0.875rem",
  },
  medium: {
    height: "2.5rem",
    fontSize: "1rem",
  },
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  }
}));