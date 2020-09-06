import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <Tooltip title="Calendar" placement="bottom" TransitionComponent={Zoom}>
        <div className="icon">
          <img
            src="https://img.icons8.com/color/48/000000/google-calendar.png"
            alt=""
          />
        </div>
      </Tooltip>
      <Tooltip title="Keep" placement="bottom" TransitionComponent={Zoom}>
        <div className="icon">
          <img
            src="https://img.icons8.com/color/48/000000/google-keep.png"
            alt=""
          />
        </div>
      </Tooltip>

      <div className="icon"></div>

      <Tooltip title="Zoom" placement="bottom" TransitionComponent={Zoom}>
        <div className="icon">
          <img src="https://img.icons8.com/fluent/48/000000/zoom.png" alt="" />
        </div>
      </Tooltip>
      <Tooltip title="Mailtrack" placement="bottom" TransitionComponent={Zoom}>
        <div className="icon">
          <img
            src="https://img.icons8.com/cotton/64/000000/secure-mail.png"
            alt=""
          />
        </div>
      </Tooltip>
      <Tooltip title="Get add-on" placement="bottom" TransitionComponent={Zoom}>
        <div className="icon add">
          <AddIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default Widgets;
