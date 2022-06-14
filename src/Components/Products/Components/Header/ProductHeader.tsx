import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { StyledProducts, navStyle } from "../../../../Styles/Products/index";

const ProductHeader = () => {
  return (
    <Box>
      <StyledProducts>
        <Typography
          component="h2"
          sx={{ fontWeight: "bold", fontSize: "30px", color: "#333" }}
        >
          TOP PRODUCTS
        </Typography>
        <Box sx={navStyle}>
          <Button variant="text" sx={{ color: "gray", fontSize: "0.85rem" }}>
            AUDIO & VIDEO GAME
          </Button>
          <Button variant="text" sx={{ color: "gray", fontSize: "0.85rem" }}>
            CAMERA & PHOTO
          </Button>
          <Button variant="text" sx={{ color: "gray", fontSize: "0.85rem" }}>
            HEADPHONE
          </Button>
        </Box>
      </StyledProducts>
    </Box>
  );
};
export default ProductHeader;