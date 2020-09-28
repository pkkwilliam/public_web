import React from "react";
import View from "../../../component/view";
import PDF from "../../assert/campaign_1.pdf";
import LeaderfocusLayout from "../../leaderfocusLayout";

export default function MianWang(props) {
  return (
    <LeaderfocusLayout>
      <View style={styles.rootContainer}>
        <h2>內蒙雙福面王</h2>
        <embed src={PDF} style={styles.pdfIFrame} />
      </View>
    </LeaderfocusLayout>
  );
}

const styles = {
  rootContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
  },
  pdfIFrame: {
    flex: 1,
    width: "100%",
  },
};
