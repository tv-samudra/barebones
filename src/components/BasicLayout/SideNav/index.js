import { Typography } from "@material-ui/core";
import classNames from "classnames";
import React, { memo } from "react";
import { useBasicNav } from "../../../hooks";
import { useStyles } from "./Styles";

let navConfig = [
  { text: "Home", path: "/home" },
  { text: "Page", path: "/page" },
];
function SideNav() {
  const classes = useStyles();

  const { activeTab, setActiveTab } = useBasicNav("/home");

  return (
    <div className={classes.sideNav}>
      <div className={classes.navItems}>
        {navConfig.map(({ text, path }, index) => (
          <div
            className={classNames(classes.navItem, {
              [classes.navActive]: path === activeTab,
            })}
            onClick={() => setActiveTab(path)}
          >
            {/* <img src={item.icon} alt={item.text} /> */}
            <Typography variant="caption" component="div">
              {text}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(SideNav);
