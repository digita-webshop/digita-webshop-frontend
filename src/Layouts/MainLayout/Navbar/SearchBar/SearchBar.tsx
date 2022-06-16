import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

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
  return (
    <Box display={"flex"} sx={{ height: "90px", alignItems: "center" }}>
      <InputBase
        placeholder="Type then hit enter to search"
        sx={{ width: "100%", height: "100%", fontSize: "20px" }}
      />
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
            <MenuItem value={"audio-video-game"}>Audio & Video Game</MenuItem>
            <MenuItem value={"bluetooth-speaker"}>Bluetooth Speaker</MenuItem>
            <MenuItem value={"camera-photo"}>Camera & Photo </MenuItem>
            <MenuItem value={"headphone"}>Headphone </MenuItem>
            <MenuItem value={"houseware"}>Houseware</MenuItem>
            <MenuItem value={"pc-laptop"}>PC & Laptop</MenuItem>
            <MenuItem value={"phone-accessories"}>Phone Accessories</MenuItem>
            <MenuItem value={"smart-tv"}>Smart TV</MenuItem>
            <MenuItem value={"smart-watch"}>Smart Watch</MenuItem>
            <MenuItem value={"smartphone-ipad"}>Smartphone & Ipad</MenuItem>
            <MenuItem value={"technologies"}>Technologies</MenuItem>
            <MenuItem value={"virtual-reality-glasses"}>
              Virtual Reality Glasses
            </MenuItem>
            <MenuItem value={"Xboxconsole"}>Xbox(Console)</MenuItem>
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
