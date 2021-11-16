import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { useStyles } from "./Style";

export function BasicLayout(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TopNav />
      <div className={classes.container}>
        <SideNav />
        <div className={classes.childs}>{props.children}</div>
      </div>
    </React.Fragment>
  );
}
