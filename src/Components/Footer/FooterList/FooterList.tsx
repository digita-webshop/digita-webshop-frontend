import React from "react";
import { Typography, Link } from "@mui/material";
import styles from "./FooterList.module.css";

const links = ["About us", "Contact us", "Blog", "Terms of Use", "Careers"];

function FooterList() {
  return (
    <div className={styles.container}>
      <Typography variant="h6" mb={2.5} color="white">
        COMPANY INFO
      </Typography>
      {links.map((link, index) => (
        <Link
          key={index}
          href="#"
          underline="none"
          mb={2}
          color="lightslategray"
          className={styles.links}
        >
          &#62; {link}
        </Link>
      ))}
    </div>
  );
}

export default FooterList;
