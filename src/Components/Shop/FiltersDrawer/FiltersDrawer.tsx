import {
  Box,
  Drawer,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { categoriesList } from "../../../Services/Utils/Data/data";
import { FilterTitleWrapper } from "../../../Styles/ShopPage";
import ColorFilter from "../ColorFilter/ColorFilter";
import PriceFilter from "../PriceFilter/PriceFilter";

type ShopFiltersDrawerProps = {
  displayDrawer: boolean;
  toggleDrawer: (open: boolean) => void;
};

function FiltersDrawer({
  displayDrawer,
  toggleDrawer,
}: ShopFiltersDrawerProps) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const selectedCategoryHandler = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <Drawer
      anchor="left"
      open={displayDrawer}
      onClose={() => toggleDrawer(false)}
    >
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
            <Typography
              component={"h4"}
              variant="body1"
              color="primary"
              fontWeight={600}
            >
              CATEGORIES
            </Typography>
          </FilterTitleWrapper>
          <FormControl
            sx={{ width: { xs: "100%" }, marginTop: "20px" }}
            size="small"
          >
            <Select
              variant="outlined"
              displayEmpty
              value={selectedCategory}
              onChange={selectedCategoryHandler}
            >
              <MenuItem value="">Select a category</MenuItem>

              {categoriesList.map(({ name }) => (
                <MenuItem value={`${name.replace(/\s/g, "-")}`}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <ColorFilter drawer={false} />
        <PriceFilter drawer={false} />
      </Box>
    </Drawer>
  );
}

export default FiltersDrawer;
