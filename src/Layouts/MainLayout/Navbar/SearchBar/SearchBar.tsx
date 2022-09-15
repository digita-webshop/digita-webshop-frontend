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
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../../features/products/productsApi";
import { categoriesList } from "../../../../Services/Utils/Data/data";
import { searchBarDropdown } from "../../../../Styles/Appbar";

type SearchBarProps = {
  openSearchBarHandler: () => void;
};

function SearchBar({ openSearchBarHandler }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();
  let queries = `search=${searchValue}`;
  if (selectedCategory) {
    queries = `${queries} &category=/${selectedCategory.replace("&", "%26")}`;
  }
  console.log(queries);

  const { data: productsData } = useGetAllProductsQuery(queries);
  console.log(productsData);

  const filteredProducts = productsData?.data.slice(0, 6);
  const selectedCategoryHandler = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };
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
          <Box
            sx={{ display: "flex", padding: "10px" }}
            onClick={() => navigate(`/shop?${queries}`)}
          >
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
            searchValue.trim().length === 0 || filteredProducts?.length === 0
              ? "hidden"
              : ""
          }
        >
          {filteredProducts &&
            filteredProducts?.map(({ _id, title }) => (
              <Box
                key={_id}
                onClick={() => {
                  let path = `/shop?search=${title}`;
                  if (selectedCategory) {
                    path = `${path} &category=/${selectedCategory.replace(
                      "&",
                      "%26"
                    )}`;
                  }
                  setSearchValue(title);
                  navigate(path);
                }}
              >
                {title}
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
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center" }}
        onClick={() => {
          setSearchValue("");
          setSelectedCategory("");
          openSearchBarHandler();
        }}
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
