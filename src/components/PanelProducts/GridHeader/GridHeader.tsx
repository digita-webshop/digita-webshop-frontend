import { Dispatch, SetStateAction } from "react";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { PTextField, PFormControl } from "styles/panel";
import { blogCategories } from "./data";
import { useLocation } from "react-router-dom";
import { productCategories } from "components/Shop/data";

interface Props {
  selectedSorting?: string;
  selectedCategory: string;
  selectedSortingHandler?: (event: SelectChangeEvent) => void;
  selectedCategoryHandler: (event: SelectChangeEvent) => void;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}
function GridHeader({
  selectedSorting,
  selectedCategory,
  selectedSortingHandler,
  selectedCategoryHandler,
  searchValue,
  setSearchValue,
}: Props) {
  const { pathname } = useLocation();
  const categories = pathname.includes("articles") ? blogCategories : productCategories;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <Box sx={{ width: { xs: "100%", sm: "40%", lg: "30%" } }}>
        <PTextField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search... " />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "45%", lg: "30%" },
          display: "flex",
          gap: "10px",
        }}
      >
        {selectedSorting && (
          <PFormControl size="small">
            <Select variant="outlined" displayEmpty value={selectedSorting} onChange={selectedSortingHandler}>
              <MenuItem value={"latest"}>Sort By Latest </MenuItem>
              <MenuItem value={"rating"}>Sort By Average Rating </MenuItem>
              <MenuItem value={"price-low-to-high"}>Sort By Price: low to high</MenuItem>
              <MenuItem value={"price-high-to-low"}>Sort By Price:high to low</MenuItem>
            </Select>
          </PFormControl>
        )}
        <PFormControl size="small">
          <Select variant="outlined" displayEmpty value={selectedCategory} onChange={selectedCategoryHandler}>
            <MenuItem value="">Select Category</MenuItem>
            {categories.map(({ name }, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </PFormControl>
      </Box>
    </Box>
  );
}

export default GridHeader;
