import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { BasicLayout } from "../../components/BasicLayout";
import useStyles from "./styles";

export function Page(props) {
  let classes = useStyles();
  useEffect(() => {
    setTimeout(() => props.loadPrimary(false),1000);
  }, []);
  return (
    <BasicLayout>
      <Grid
        container
        className={classes.container}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6">PAGE</Typography>
      </Grid>
    </BasicLayout>
  );
}
