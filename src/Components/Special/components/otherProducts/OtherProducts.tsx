import React from "react";
import OtherProductItem from "./components/otherProductItem/OtherProductItem";
import { Grid } from "@mui/material";

const OtherProducts = () => {
  return (
    <>
      <Grid container spacing={3} sx={{marginTop: '1rem'}}>
        <Grid item xs={8} md={6}>
          <OtherProductItem />
        </Grid>
        <Grid item xs={8} md={6}>
          <OtherProductItem />
        </Grid>
      </Grid>
    </>
  );
};

export default OtherProducts;
