import { Typography } from "@material-ui/core";
import classNames from "classnames";
import React, { memo } from "react";
import { useBasicNav } from "../../../utils/useBasicNav";
import { useStyles } from "./Styles";

const navConfig = [{ text: "HOME", icon: null, navTag: "home" }];

function SideNav() {
  const classes = useStyles();

  const { activeTab, setActiveTab } = useBasicNav("home");

  return (
    <div className={classes.sideNav}>
      <div className={classes.navItems}>
        {navConfig.map((item, index) => (
          <div
            className={classNames(classes.navItem, {
              [classes.navActive]: index === activeTab,
            })}
            onClick={() => setActiveTab(item.navTag)}
          >
            {/* <img src={item.icon} alt={item.text} /> */}
            <Typography variant="caption" component="div">
              {item.text}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(SideNav);
