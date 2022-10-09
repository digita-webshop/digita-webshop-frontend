import { useState, useRef } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CloseRounded, SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../../redux/products/productsApi";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";
import { searchBarDropdown } from "../styles";
import { PStack } from "../../../../styles/panel";
import { productCategories } from "../../../../components/Shop/data";

type SearchBarProps = {
  openSearchBarHandler: () => void;
};

function SearchBar({ openSearchBarHandler }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [closeDropdown, setCloseDropdown] = useState(true);

  const searchRef = useRef<HTMLDivElement>(null);

  const searchClickOutside = () => {
    setCloseDropdown(true);
  };

  useOnClickOutside(searchRef, searchClickOutside);

  const navigate = useNavigate();
  let queries = `search=${searchValue}`;
  if (selectedCategory) {
    queries = `${queries} &category=/${selectedCategory.replace("&", "%26")}`;
  }

  const { data: productsData, isLoading } = useGetAllProductsQuery(queries);
  const products = productsData?.data ?? [];

  const selectedCategoryHandler = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const suggestionClickHandler = (title: string) => () => {
    let path = `/shop?search=${title}`;
    if (selectedCategory) {
      path = `${path} &category=/${selectedCategory.replace("&", "%26")}`;
    }

    setSearchValue(title);

    navigate(path);
    setCloseDropdown(true);
  };
  return (
    <Box display={"flex"} sx={{ height: "90px", alignItems: "center" }}>
      <Box
        sx={{ position: "relative", width: "100%", height: "100%" }}
        ref={searchRef}
      >
        <Box sx={{ display: "flex", height: "100%" }}>
          <InputBase
            placeholder="Type then hit enter to search"
            sx={{ width: "100%", height: "100%", fontSize: "20px" }}
            onChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
            onFocus={() => setCloseDropdown(false)}
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
            searchValue.trim().length === 0 || closeDropdown ? "hidden" : ""
          }
        >
          {isLoading ? (
            <Box>
              <PStack>
                <CircularProgress color="error" />
              </PStack>
            </Box>
          ) : products?.length === 0 ? (
            <Box sx={{ textTransform: "capitalize" }}>no result found!</Box>
          ) : (
            products?.slice(0, 6).map(({ _id, title }) => (
              <Box key={_id} onClick={suggestionClickHandler(title)}>
                {title}
              </Box>
            ))
          )}
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
            {productCategories.map(({ name }, index) => (
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
