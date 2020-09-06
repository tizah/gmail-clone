import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Header.css";

function Header() {
  return (
    //need to finish styling the nav component
    <div className="header">
      <div className="header__left__left">
        <div className="left">
          <div className="menuIcon">
            {/* hover effect not working as the real gmail on this icon */}
            <MenuIcon />
          </div>
          <div>
            <img
              src={`https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png`}
              alt=""
            />
          </div>
          <div>
            <p>Gmail</p>
          </div>
        </div>
      </div>

      <div className="header__middle__outer">
        <div className="header__middle">
          <div className="search__input">
            <SearchIcon />
            <input placeholder="Search mail" />
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
        <SettingsIcon />
        <ViewComfyIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
