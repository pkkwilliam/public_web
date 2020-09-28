import React from "react";
import View from "../../component/view";

export default function LeaderfocusHeader(props) {
  return (
    <View style={styles.rootContainer}>
      <p>地址: 澳門漁翁街永好工業大廈7樓G座</p>
      <p>電話: 28719871</p>
    </View>
  );
}

const styles = {
  rootContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 5,
    paddingTop: 5,
  },
};
