import React from "react";
import LeaderfocusHeader from "./header/leaderfocusHeader";
import LeaderfocusFooter from "./footer/leaderfocusFooter";

export default function LeaderfocusLayout(props) {
  return (
    <>
      <LeaderfocusHeader />
      {props.children}
      <LeaderfocusFooter />
    </>
  );
}
