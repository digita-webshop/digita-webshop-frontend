import { Box, Button, Typography } from "@mui/material";
import React from "react";
import {
  navStyle,
  StyledProducts,
} from "../../../../Styles/Products";

const SpecialHeader = () => {
  return (
    <Box>
      <StyledProducts>
        <Typography
          component="h2"
          sx={{ fontWeight: "bold", fontSize: "30px", color: "#333" }}
        >
          SPECIAL
        </Typography>
        <Box sx={navStyle}>
          <Button variant="text" sx={{ color: "gray", fontSize: "0.85rem" }}>
            LATEST PRODUCTS
          </Button>
          <Button variant="text" sx={{ color: "gray", fontSize: "0.85rem" }}>
            BEST SELLING
          </Button>
          <Button variant="text" sx={{ color: "gray", fontSize: "0.85rem" }}>
            FEATURED
          </Button>
        </Box>
      </StyledProducts>
    </Box>
  );
};
export default SpecialHeader;