import React from "react";
import LeaderfocusProductLayout from "../../../layout/leaderfocusProductLayout";
import ProductImage from "./mian_wang.png";

const CHARACTERISTICS = [
  "加工精度高",
  "操作性能好",
  "品質穩定",
  "雙重包裝，保證衛生",
];
const DEALER_TITLE = "(省港澳總代理)";
const PDF_FILE =
  "https://drive.google.com/file/d/1ZWzTglaqUVZppWVAqLlbwJe2CFoqoF-G/view?usp=sharing";
const PRODUCT_IMAGE = ProductImage;
const PRODUCT_NAME = "內蒙雙福面王";

export default function MianWang(props) {
  return (
    <LeaderfocusProductLayout
      characteristics={CHARACTERISTICS}
      dealerTitle={DEALER_TITLE}
      pdfFileUrl={PDF_FILE}
      productImageUrl={PRODUCT_IMAGE}
      productName={PRODUCT_NAME}
    />
  );
}
