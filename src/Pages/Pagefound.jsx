import React from "react";
import Grid from "@mui/material/GridLegacy";
import { Typography } from "@mui/material";

export function Pagefound() {
  console.log("hello jyothi");
  return (
    <Grid container spacing={2}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Page not found</Typography>
      <Typography variant="h3">
        Please go back something went wrong!!!!...
      </Typography>
    </Grid>
  );
}
