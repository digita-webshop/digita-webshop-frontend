import React, { Dispatch, SetStateAction } from "react";
import { Box, Button, Typography } from "@mui/material";
import { StyledProducts, navStyle } from "../../../../Styles/Products/index";

const categories = ["audio & video game", "camera & photo", "headphone"];

interface Props {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}
const ProductHeader = ({ selectedCategory, setSelectedCategory }: Props) => {
  return (
    <Box>
      <StyledProducts>
        <Typography
          component="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "25px", md: "30px" },
            color: "#333",
          }}
        >
          TOP PRODUCTS
        </Typography>
        <Box sx={navStyle}>
          {categories.map((cat, index) => (
            <Button
              key={index}
              variant="text"
              sx={{
                color: selectedCategory === cat ? "common.digitaRed" : "gray",
                backgroundColor: selectedCategory === cat ? "#FDEBEB" : "",
                fontSize: { xs: "0.70rem", sm: "0.85rem" },
                textTransform: "uppercase",
              }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </Box>
      </StyledProducts>
    </Box>
  );
};
export default ProductHeader;
