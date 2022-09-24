import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { Typography } from "@mui/material";
import { FilterTitleWrapper } from "../../../../../Styles/ShopPage";
import { SetStateAction, Dispatch } from "react";

interface Props {
  setSearchValue: Dispatch<SetStateAction<string>>;
}
const SearchBar = ({ setSearchValue }: Props) => {
  return (
    <Box
      sx={{
        border: "1px solid #e9e9e9",
        px: "20px",
        pt: "20px",
        pb: "30px",
        mb: "30px",
      }}
      className="search-bar"
    >
      <FilterTitleWrapper className="underline">
        <Typography
          component={"h4"}
          variant="body1"
          color="primary"
          fontWeight={600}
        >
          SEARCH
        </Typography>
      </FilterTitleWrapper>
      <InputBase
        sx={{
          backgroundColor: "#e9e9e9",
          borderRadius: "4px",
          py: "6px",
          px: "12px",
          fontSize: "14px",
          width: "100%",
          mt: "14px",
        }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
