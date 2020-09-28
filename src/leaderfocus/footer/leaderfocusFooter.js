import React from "react";
import View from "../../component/view";

const ADDRESS = "澳門漁翁街永好工業大廈7樓G座";
const EMAIL = "leaderfocus@gmail.com";
const PHONE = "28719871";

export default function LeaderfocusHeader(props) {
  return (
    <View style={styles.rootContainer}>
      <p>{`地址: ${ADDRESS}`}</p>
      <p>{`電話: ${PHONE}`}</p>
      <a href={`mailto:${EMAIL}`}>
        <p>{`Email: ${EMAIL}`}</p>
      </a>
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
