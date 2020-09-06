import React from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import StarRateIcon from "@material-ui/icons/StarRate";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import "./SidebarLinks.css";

function SidebarLinks() {
  return (
    <div className="sidebarlinks">
      <Tooltip title="Inbox" placement="right-start" TransitionComponent={Zoom}>
        <div className="link inbox-active">
          <div className="icon">
            <InboxIcon />
          </div>
          <div className="link__text">Inbox</div>
        </div>
      </Tooltip>

      <Tooltip
        title="Starred"
        placement="right-start"
        TransitionComponent={Zoom}
      >
        <div className="link">
          <div className="icon">
            <StarRateIcon />
          </div>
          <div className="link__text">Starred</div>
        </div>
      </Tooltip>

      <Tooltip
        title="Snoozed"
        placement="right-start"
        TransitionComponent={Zoom}
      >
        <div className="link">
          <div className="icon">
            <WatchLaterIcon />
          </div>
          <div className="link__text">Snoozed</div>
        </div>
      </Tooltip>

      <Tooltip
        title="Important"
        placement="right-start"
        TransitionComponent={Zoom}
      >
        <div className="link">
          <div className="icon">
            <LabelImportantIcon />
          </div>
          <div className="link__text">Important</div>
        </div>
      </Tooltip>

      <Tooltip title="Sent" placement="right-start" TransitionComponent={Zoom}>
        <div className="link">
          <div className="icon">
            <SendIcon />
          </div>
          <div className="link__text">Sent</div>
        </div>
      </Tooltip>

      <Tooltip title="Draft" placement="right-start" TransitionComponent={Zoom}>
        <div className="link">
          <div className="icon">
            <InsertDriveFileIcon />
          </div>
          <div className="link__text">Draft</div>
        </div>
      </Tooltip>
      <Tooltip
        title="Categories"
        placement="right-start"
        TransitionComponent={Zoom}
      >
        <div className="link">
          <div className="icon">
            <DoubleArrowIcon />
          </div>
          <div className="link__text">Categories</div>
        </div>
      </Tooltip>

      <div className="link">
        <div className="icon">
          <ExpandMoreIcon />
        </div>
        <div className="link__text">More</div>
      </div>
    </div>
  );
}

export default SidebarLinks;
