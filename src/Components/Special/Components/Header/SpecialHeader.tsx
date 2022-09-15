import { Box, Button, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { navStyle, StyledProducts } from "../../../../Styles/Products";

const sortList = ["latest", "rating"];
interface Props {
  selectedSorting: string;
  setSelectedSorting: Dispatch<SetStateAction<string>>;
}
const SpecialHeader = ({ selectedSorting, setSelectedSorting }: Props) => {
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
          {sortList.map((sort, index) => (
            <Button
              key={index}
              variant="text"
              sx={{
                color: selectedSorting === sort ? "common.digitaRed" : "gray",
                backgroundColor: selectedSorting === sort ? "#FDEBEB" : "",
                fontSize: { xs: "0.70rem", sm: "0.85rem" },
                textTransform: "uppercase",
              }}
              onClick={() => setSelectedSorting(sort)}
            >
              {sort === "latest" ? "latest products" : "top rating"}
            </Button>
          ))}
        </Box>
      </StyledProducts>
    </Box>
  );
};
export default SpecialHeader;
