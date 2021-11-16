import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

const Loader = () => {
  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      spacing={0}
      style={{ height: "100%" }}
    >
      <Grid item xs={3}>
        <CircularProgress disableShrink />
      </Grid>
    </Grid>
  );
};

export default Loader;
