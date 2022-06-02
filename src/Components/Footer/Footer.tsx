import React from "react";
import FooterList from "./FooterList/FooterList";
import Subscription from "./Subscription/Subscription";
import styles from "./Footer.module.css";
import { Grid, Typography, Link } from "@mui/material";
import Line from "./Line/Line";

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
        <Line />

        <Typography
          variant="body1"
          color="lightslategray"
          className={styles.copyright}
          my={4}
          mx={2}
          textAlign="center"
        >
          Copyright © 2022 <Link>Digita</Link> - All Rights Reserved - Powered
          by <Link>Digita</Link>.
        </Typography>
      </Grid>
    </div>
  );
}

export default Footer;
