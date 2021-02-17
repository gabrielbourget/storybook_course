import { StyleSheet } from "aphrodite";

export const styleGen = () => {
  StyleSheet.create({
    button: {
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: 16,
      borderRadius: 4,
      cursor: "pointer",
    },
    primary: { backgroundColor: "#008CBA" },
    secondary: { backgroundColor: "#E7E7E7", color: "black", },
    success: { backgroundColor: "#4CAF50" },
    danger: { backgroundColor: "#F44336" }
  })
}
