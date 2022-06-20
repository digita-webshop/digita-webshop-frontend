import { Box, Typography } from "@mui/material";
import React from "react";
import { CustomBreadcrumbs } from "../../../Components";

const wrapperStyle = {
    margin: '3rem auto',

}

const titleStyle = {
  fontWeight: "bold",
  color: "#222",
};

const Wishlist = () => {
  return (
    <>
      <CustomBreadcrumbs title={"Wishlist"} />

      <Box maxWidth="lg" sx={wrapperStyle}>
        <Typography variant="h3" sx={titleStyle}>
          Default Wishlist
        </Typography>
      </Box>
    </>
  );
};

export default Wishlist;
