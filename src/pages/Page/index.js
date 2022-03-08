import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { BasicLayout } from "../../components/BasicLayout";
import { useBasicNav, useToast } from "../../hooks";
import useStyles from "./styles";

let navConfig = [
  { text: "Home", path: "/home/home" },
  { text: "Page", path: "/page/page" },
];
export function Page({ loadPrimary }) {
  let classes = useStyles();

  let { setActiveTab } = useBasicNav("/home");

  let { Toast } = useToast();

  useEffect(() => {
    setTimeout(() => {
      Toast.success("Let have a 🥂");
    }, 2000);
  }, []);

  return (
    <BasicLayout>
      <Grid
        container
        className={classes.container}
        justifyContent="space-between"
        alignItems="center"
      >
        This is page
        {navConfig.map((item) => {
          return (
            <Typography
              variant="button"
              onClick={() => setActiveTab(item.path)}
            >
              {item.text}
            </Typography>
          );
        })}
      </Grid>
    </BasicLayout>
  );
}
