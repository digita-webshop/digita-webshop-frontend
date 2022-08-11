import { CloseRounded, SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  categoriesList,
  productData,
} from "../../../../Services/Utils/Data/data";
import { searchBarDropdown } from "../../../../Styles/Appbar";

type SearchBarProps = {
  selectedCategory: string;
  selectedCategoryHandler: (event: SelectChangeEvent) => void;
  openSearchBarHandler: () => void;
};

function SearchBar({
  selectedCategory,
  selectedCategoryHandler,
  openSearchBarHandler,
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = productData
    .filter((item) =>
      selectedCategory ? selectedCategory === item.category : true
    )
    .filter((item) => {
      const searchTerm = searchValue.toLowerCase();
      const fullName = item.name.toLowerCase();

      return (
        searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
      );
    })
    .slice(0, 6);

  return (
    <Box display={"flex"} sx={{ height: "90px", alignItems: "center" }}>
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <InputBase
            placeholder="Type then hit enter to search"
            sx={{ width: "100%", height: "100%", fontSize: "20px" }}
            onChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
          />
          <Box sx={{ display: "flex", padding: "10px" }}>
            <SearchOutlined
              sx={{
                color: "common.digitaGrey",
                cursor: "pointer",
                margin: "auto",
                fontSize: "28px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={searchBarDropdown}
          className={
            searchValue.trim().length === 0 || filteredProducts.length === 0
              ? "hidden"
              : ""
          }
        >
          {filteredProducts.map(({ id, name }) => (
            <Box
              component={Link}
              to={`product/${id}`}
              key={id}
              onClick={() => {
                openSearchBarHandler();
                setSearchValue("");
              }}
            >
              {name}
            </Box>
          ))}
        </Box>
      </Box>
      <Divider
        orientation="vertical"
        sx={{ height: "50%", margin: "auto" }}
        variant="middle"
        flexItem
      />
      <Box sx={{ marginRight: "40px", marginLeft: "20px" }}>
        <FormControl sx={{ width: "200px" }}>
          <Select
            disableUnderline
            variant="standard"
            displayEmpty
            value={selectedCategory}
            onChange={selectedCategoryHandler}
            sx={{ border: "0" }}
          >
            <MenuItem value="">Select Category</MenuItem>
            {categoriesList.map(({ name }, index) => (
              <MenuItem key={index} value={`${name.replace(/\s/g, "-")}`}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center" }}
        onClick={openSearchBarHandler}
      >
        <CloseRounded
          color="primary"
          fontSize="medium"
          sx={{
            border: "2px solid black",
            borderRadius: "50%",
            cursor: "pointer",
            "&:hover": {
              borderColor: "#f03637",
              color: "#f03637",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default SearchBar;
