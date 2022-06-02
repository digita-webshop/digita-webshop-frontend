import React from "react";
import { Typography, Link, Grid } from "@mui/material";
import styles from "./FooterList.module.css";

const links = ["About us", "Contact us", "Blog", "Terms of Use", "Careers"];

function FooterList() {
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
      {links.map((link, index) => (
        <Link
          key={index}
          href="#"
          underline="none"
          mb={1.5}
          color="lightslategray"
          className={styles.links}
          variant="body1"
        >
          &#62; {link}
        </Link>
      ))}
    </Grid>
  );
}

export default FooterList;
