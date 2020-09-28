import React from "react";
import LeaderfocusProductLayout from "../../leaderfocusProductLayout";

const CHARACTERISTICS = ["加工精度高", "操作性能好", "品質穩定"];
const PDF_FILE =
  "https://drive.google.com/file/d/1ZWzTglaqUVZppWVAqLlbwJe2CFoqoF-G/view?usp=sharing";
const PRODUCT_IMAGE =
  "https://is4-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/c8/6d/db/c86ddb5f-a92c-f51f-64d7-166778c86b2d/19295133-2fcb-4831-95f2-c4a4afbba69c_Crop_iPad.png/643x0w.jpg";
const PRODUCT_NAME = "內蒙雙福面王";

export default function MianWang(props) {
  return (
    <LeaderfocusProductLayout
      characteristics={CHARACTERISTICS}
      pdfFileUrl={PDF_FILE}
      productImageUrl={PRODUCT_IMAGE}
      productName={PRODUCT_NAME}
    />
  );
}
