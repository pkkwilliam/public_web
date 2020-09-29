import React from "react";
import View from "../../component/view";
import P from "../../component/text/paragraph";
import { styleSchema } from "../../component/styleSchema";

const ADDRESS = "澳門漁翁街永好工業大廈7樓G座";
const EMAIL = "leaderfocus@gmail.com";
const PHONE = "28719871";

export default function LeaderfocusHeader(props) {
  return (
    <View style={styles.rootContainer}>
      <P>{`地址: ${ADDRESS}`}</P>
      <a href={`mailto:${EMAIL}`}>
        <P>{`Email: ${EMAIL}`}</P>
      </a>
      <P>{`電話: ${PHONE}`}</P>
    </View>
  );
}

const styles = {
  rootContainer: {
    alignItems: "center",
    boxShadow: styleSchema.boxShadow,
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 15,
    paddingBottom: 5,
    paddingTop: 5,
  },
  text: {
    margin: 0,
  },
};
