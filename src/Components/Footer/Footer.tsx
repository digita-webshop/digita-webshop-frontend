import React from "react";
import FooterList from "./FooterList/FooterList";
import styles from "./Footer.module.css";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <div className={styles.container}>
      <Grid
        container
        sx={{ display: "flex", bgcolor: "#092240" }}
        height="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <FooterList />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <FooterList />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <FooterList />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <FooterList />
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
