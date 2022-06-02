import React from "react";
import FooterList from "./FooterList/FooterList";
import Subscription from "./Subscription/Subscription";
import styles from "./Footer.module.css";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <div className={styles.container}>
      <Grid
        container
        sx={{ bgcolor: "#092240" }}
        height="100%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={8} md={4} lg={2}>
          <FooterList />
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={2}>
          <FooterList />
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={2}>
          <FooterList />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Subscription />
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
