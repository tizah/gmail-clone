import React from "react";
import CheckboxIcon from "../Checkbox/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import "./Email.css";

function Email() {
  return (
    <div className="email">
      <div className="left">
        <CheckboxIcon
          IconName={CheckBoxOutlineBlankIcon}
          CheckedIconName={CheckBoxIcon}
          color={`default`}
        />
        <CheckboxIcon
          IconName={StarBorderIcon}
          CheckedIconName={StarIcon}
          color={`gold`}
        />
        <CheckboxIcon
          IconName={LabelImportantIcon}
          CheckedIconName={LabelImportantIcon}
          color={`gold`}
        />
        <div className="title">Facebook</div>
      </div>
      <div className="email__content">
        As we discussed, your starting date will be June 1, 2020. The starting
        salary is $48,000 per year and is paid on a weekly basis. Direct deposit
        is available. Full family medical coverage will be provided through our
        company's employee benefit plan and will be effective on March 1. Dental
        and optical insurance are also available. ABCD offers a flexible paid
        time-off plan which includes vacation, personal, and sick leave. Time
        off accrues at the rate of one day per month for your first year, then
        increases based on your tenure with the company. Eligibility for the
        company retirement plan begins 90 days after your start date. If you
        choose to accept this job offer, please sign the second copy of this
        letter and return it to me at your earliest convenience.
      </div>
      <div className="right">
        <div className="time">Oct 1</div>
        <div className="hover__icons">
          <Tooltip
            title="Archive"
            placement="bottom"
            TransitionComponent={Zoom}
          >
            <ArchiveIcon />
          </Tooltip>

          <Tooltip title="Delete" placement="bottom" TransitionComponent={Zoom}>
            <DeleteIcon />
          </Tooltip>

          <Tooltip
            title="Mark as read"
            placement="bottom"
            TransitionComponent={Zoom}
          >
            <MarkunreadIcon />
          </Tooltip>

          <Tooltip title="Snooze" placement="bottom" TransitionComponent={Zoom}>
            <WatchLaterIcon />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Email;
