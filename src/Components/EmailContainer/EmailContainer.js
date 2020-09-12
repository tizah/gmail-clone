import React from "react";
import EmailIcons from "./EmailIcons";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmailAccordion from "./EmailAccordion";
import "./EmailContainer.css";

function EmailContainer() {
  return (
    <div className="emailcontainer">
      <div className="icons">
        <EmailIcons />
        <RefreshIcon />
        <MoreVertIcon />
      </div>
      <div className="eamilList">
        <EmailAccordion />
      </div>
    </div>
  );
}

export default EmailContainer;
