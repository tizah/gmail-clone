import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import Zoom from "@material-ui/core/Zoom";
import "./SidebarMeet.css";
function SidebarMeet() {
  return (
    <div className="sidebarmeet">
      <h5>Meet</h5>
      <Tooltip
        title="start a meeting"
        placement="right-start"
        TransitionComponent={Zoom}
      >
        <div className="link">
          <div className="icon">
            <VideocamIcon />
          </div>
          <div className="link__text">Start a meeting</div>
        </div>
      </Tooltip>

      <Tooltip
        title="join a meeting"
        placement="right-start"
        TransitionComponent={Zoom}
      >
        <div className="link">
          <div className="icon">
            <KeyboardIcon />
          </div>
          <div className="link__text">Join a meeting</div>
        </div>
      </Tooltip>
    </div>
  );
}

export default SidebarMeet;
