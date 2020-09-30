import React from "react";

export default function View(props) {
  return (
    <div style={{ ...styles.rootContainer, ...props.style }}>
      {props.children}
    </div>
  );
}

const styles = {
  rootContainer: {
    display: "flex",
    flex: "0 0 auto",
  },
};
