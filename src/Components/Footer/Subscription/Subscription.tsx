import React from "react";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@mui/material";
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
        <FormControl
          sx={{ width: "100%", display: "flex", flexDirection: "row" }}
        >
          <TextField
            sx={{
              flex: "2",
              backgroundColor: "#fff",
              border: "3px solid #fff",
              "& .MuiInput-underline:after": {
                border: "2px solid #fff",
              },
            }}
            required
            label="Email"
            variant="standard"
          ></TextField>
          <Button
            sx={{ flex: 1, "&:hover": { backgroundColor: "#333" } }}
            variant="contained"
            color="error"
          >
            Subscribe
          </Button>
        </FormControl>
      </Grid>
      <Typography
        component={"span"}
        mt={1.5}
        variant="body1"
        mb={2.5}
        color="lightslategray"
      >
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
