import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";

const StyledProducts = styled(Box)(({ theme }) => ({
  paddingTop: "3rem",
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));



const ProductHeader = () => {
  return (
    <Box>
      <StyledProducts>
        <Typography variant="h5" component="h2" fontWeight="bold">
          TOP PRODUCTS
        </Typography>
        <Box>
          <Button variant="text" sx={{ color: "gray", fontSize: '0.9rem' }}>
            AUDIO & VIDEO GAME
          </Button>
          <Button variant="text" sx={{ color: "gray",fontSize: '0.9rem' }}>
            CAMERA & PHOTO
          </Button>
          <Button variant="text" sx={{ color: "gray",fontSize: '0.9rem' }}>
            HEADPHONE
          </Button>
        </Box>
      </StyledProducts>
    </Box>
  );
};

export default ProductHeader;
