import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Facebook, Twitter, Instagram, Pinterest } from "@mui/icons-material";

import styles from "./Subscription.module.css";

function Subscription() {
  return (
    <Grid
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      p="1rem"
    >
      <Typography variant="h6" mb={2.5} color="white">
        COMPANY INFO
      </Typography>
      <Typography variant="body1" mb={2.5} color="lightslategray">
        Subscribe to the weekly newsletter for all the latest updates & get a
        10% off bill offers.
      </Typography>
      <Grid width="100%">
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
          ></input>
          <Button className={styles.button} variant="contained" color="error">
            Subscribe
          </Button>
        </form>
      </Grid>
      <Typography mt={1.5} variant="body1" mb={2.5} color="lightslategray">
        <Grid
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          className={styles.svg}
        >
          Follow us on:
          <Facebook /> <Twitter /> <Instagram /> <Pinterest />
        </Grid>
      </Typography>
    </Grid>
  );
}

export default Subscription;
