import React from "react";
import AddIcon from "@material-ui/icons/Add";
import SidebarLinks from "./SidebarLinks";
import SidebarMeet from "./SidebarMeet";
import Hangouts from "./Hangouts";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__compose">
        <AddIcon />
        <div className="compose">Compose</div>
      </div>
      <SidebarLinks />
      <hr />
      <SidebarMeet />
      <Hangouts />
    </div>
  );
}

export default Sidebar;
