import React from "react";
import { styleSchema } from "../../component/styleSchema";
import LOGO from "../assert/leaderfocus_logo.png";

export default function LeaderfocusHeader(props) {
  return (
    <div style={styles.rootContainer}>
      <img alt="logo" src={LOGO} style={styles.logoImage} />
    </div>
  );
}

const styles = {
  rootContainer: {
    boxShadow: styleSchema.boxShadow,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  logoImage: {
    maxHeight: 100,
    maxWidth: "100%",
  },
};
