import React from "react";
import { Box, Typography } from "@mui/material";
const image = require("../../../Assets/Image/cate1.jpg");

function CategoriesCard() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="17rem"
      height="17rem"
      ml="14%"
      mr="12%"
      mb="4rem"
      sx={{
        cursor: "pointer",
      }}
    >
      <img src={image} alt="cate1" width="100%" height="100%" />
      <Typography variant="body1" mt={-6}>
        SmartPhone & Ipad
      </Typography>
    </Box>
  );
}

export default CategoriesCard;
