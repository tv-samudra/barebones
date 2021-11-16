import { AppBar, Avatar, Grid } from "@material-ui/core";
import React from "react";
import { LogoImage } from "../../../assets/images";
import { useStyles } from "./Style";

function TopNav() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.nav} color="primary">
      <Grid container>
        <img
          src={LogoImage}
          alt="Tv Vizualize"
          className={classes.brandImage}
        />
        <div className={classes.profileAvatarContainer}>
          <Avatar className={classes.avatar}>BD</Avatar>
        </div>
      </Grid>
    </AppBar>
  );
}

export default TopNav;
