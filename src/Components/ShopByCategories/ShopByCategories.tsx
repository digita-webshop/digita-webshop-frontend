import React from "react";
import { Box } from "@mui/material";
import Slider from "./Slider/Slider";

function ShopByCategories() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${require("../../Assets/Image/bg-shop-by-categories.jpg.jpg")})`,
      }}
      height="100vh"
      display="flex"
      alignItems="center"
    >
      <Slider />
    </Box>
  );
}

export default ShopByCategories;
