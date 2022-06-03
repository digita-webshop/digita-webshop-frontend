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
  Button: {
    "&:hover": {
      transition: 'all 0.4s',
      backgroundColor: 'transparent',
      color: '#f03637',
    }
  }
}));

const titleStyle = {
  fontWeight: "bold", 
  fontSize: '26px',
  color: '#333',
}


const ProductHeader = () => {
  return (
    <Box>
      <StyledProducts>
        <Typography component="h2" sx={titleStyle}>
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
