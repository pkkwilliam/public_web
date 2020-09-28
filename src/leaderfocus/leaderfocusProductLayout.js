import React from "react";
import LeaderfocusHeader from "./header/leaderfocusHeader";
import LeaderfocusFooter from "./footer/leaderfocusFooter";
import View from "../component/view";

export default function LeaderfocusProductLayout(props) {
  return (
    <>
      <LeaderfocusHeader />
      <Content {...props} />
      {props.children}
      <LeaderfocusFooter />
    </>
  );
}

function Content({
  characteristics,
  pdfFileUrl,
  productImageUrl,
  productName,
}) {
  return (
    <View style={styles.contentContainer}>
      <h2 style={styles.productNameText}>{productName}</h2>
      {generateList(characteristics)}
      <a href={pdfFileUrl}>
        <p style={styles.productDetailText}>產品詳細</p>
      </a>
      <img
        alt={`${productName}_image`}
        src={productImageUrl}
        style={styles.prodcutImage}
      />
    </View>
  );
}

function generateList(items) {
  const itemList = items.map((item) => <li>{item}</li>);
  return (
    <ul style={styles.productCharacteristicsContainer}>
      <p>{itemList}</p>
    </ul>
  );
}

const styles = {
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
  },
  productCharacteristicsContainer: {
    margin: 0,
  },
  productDetailText: {
    marginTop: 0,
  },
  prodcutImage: {
    width: "100%",
  },
  productNameText: {
    marginBottom: 0,
  },
};
