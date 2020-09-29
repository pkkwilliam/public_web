import React from "react";
import LeaderfocusHeader from "./leaderfocusHeader";
import LeaderfocusFooter from "./leaderfocusFooter";
import View from "../../component/view";

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
  dealerTitle,
  pdfFileUrl,
  productImageUrl,
  productName,
}) {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.productNameContainer}>
        <h2>{productName}</h2>
        <h6>{dealerTitle}</h6>
      </View>

      {generateList(characteristics)}
      <div style={styles.productDetailTextContainer}>
        <a href={pdfFileUrl}>
          <p style={styles.productDetailText}>產品詳細</p>
        </a>
      </div>

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
  return <ul variant="flush">{itemList}</ul>;
}

const styles = {
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
  },
  productCharacteristicsContainer: {
    marginTop: 20,
  },
  productDetailTextContainer: { marginTop: 0 },
  prodcutImage: {
    width: "100%",
  },
  productNameContainer: {
    alignItems: "flex-end",
    marginTop: 20,
  },
};
