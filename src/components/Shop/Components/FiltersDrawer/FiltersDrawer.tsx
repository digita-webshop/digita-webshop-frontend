import { useState } from "react";
import { Box, Drawer, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { FilterTitleWrapper } from "../../styles";
import ColorFilter from "../ColorFilter/ColorFilter";
import PriceFilter from "../PriceFilter/PriceFilter";
import { productCategories } from "../../data";

type ShopFiltersDrawerProps = {
  displayDrawer: boolean;
  toggleDrawer: (open: boolean) => void;
  addQueryParams: (filter: string, name: string) => () => void;
};

function FiltersDrawer({ displayDrawer, toggleDrawer, addQueryParams }: ShopFiltersDrawerProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  const selectedCategoryHandler = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
    searchParams.set("category", `/${event.target.value}`);
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <Drawer anchor="left" open={displayDrawer} onClose={() => toggleDrawer(false)}>
      <Box
        sx={{
          bgcolor: "#f7f7f7",
          height: "100%",
          width: "300px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <FilterTitleWrapper>
            <Typography component={"h4"} variant="body1" color="primary" fontWeight={600}>
              CATEGORIES
            </Typography>
          </FilterTitleWrapper>
          <FormControl sx={{ width: { xs: "100%" }, marginTop: "20px" }} size="small">
            <Select variant="outlined" displayEmpty value={selectedCategory} onChange={selectedCategoryHandler}>
              <MenuItem value="">Select a category</MenuItem>

              {productCategories.map(({ name }, index) => (
                <MenuItem key={index} value={`${name}`}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <ColorFilter drawer={false} addQueryParams={addQueryParams} />
        <PriceFilter drawer={false} />
      </Box>
    </Drawer>
  );
}

export default FiltersDrawer;
