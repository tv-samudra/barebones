import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { BasicLayout } from "../../components/BasicLayout";
import useStyles from "./styles";

export function Home() {
  let classes = useStyles();

  return (
    <BasicLayout>
      <Grid
        container
        className={classes.container}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6">Home</Typography>
      </Grid>
    </BasicLayout>
  );
}
