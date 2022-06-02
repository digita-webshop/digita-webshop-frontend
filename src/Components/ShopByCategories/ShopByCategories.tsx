import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "./Slider/Slider";

function ShopByCategories() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${require("../../Assets/Image/bg-shop-by-categories.jpg.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h4"
        color="white"
        fontWeight={700}
        textTransform="uppercase"
        mt={-2}
        mb={2}
      >
        Shop By Categories
      </Typography>
      <img
        src={require("../../Assets/Image/icon-title.png")}
        alt="icon-shop-by-categories"
      />

      <Box width="90vw" height="50%" display="flex" alignItems="center">
        <Slider />
      </Box>
    </Box>
  );
}

export default ShopByCategories;
