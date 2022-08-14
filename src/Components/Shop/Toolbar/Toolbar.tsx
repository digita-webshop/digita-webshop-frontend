import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { FilterList, GridView, TableRows } from "@mui/icons-material";
import { useState } from "react";
import { ToolbarButton } from "../../../Styles/ShopPage";
import { useSearchParams } from "react-router-dom";

type ShopToolbarProps = {
  matches: boolean;
  toggleDrawer: (open: boolean) => void;
  setSelectedLayout: any;
  selectedLayout: { grid: boolean; list: boolean };
};

function Toolbar({
  matches,
  toggleDrawer,
  setSelectedLayout,
  selectedLayout,
}: ShopToolbarProps) {
  const [productNumber, setProductNumber] = useState({
    twelve: true,
    twentyFour: false,
    all: false,
  });
  const [selectedSorting, setSelectedSorting] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  const productNumberHandler = (amount: string) => {
    setProductNumber({
      twelve: false,
      twentyFour: false,
      all: false,
      [amount]: true,
    });
  };
  const selectedSortingHandler = (event: SelectChangeEvent) => {
    let value = event.target.value;
    setSelectedSorting(value);
    if (value) {
      searchParams.set("sort", value);
    } else {
      searchParams.delete("sort");
    }

    setSearchParams(searchParams);
  };
  return (
    <Box
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
        paddingBottom: "15px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Button
          startIcon={<FilterList sx={{ fontSize: "25px" }} />}
          onClick={() => toggleDrawer(true)}
          sx={{
            "&:hover": { color: "#f03637", backgroundColor: "white" },
            cursor: "pointer",
            transition: "all 100ms ease-in",
            display: { xs: "flex", md: "none" },
            marginRight: "6px",
            fontSize: "18px",
          }}
        >
          Filter
        </Button>
        <Box
          onClick={() => setSelectedLayout({ grid: true, list: false })}
          sx={{ marginLeft: "auto" }}
        >
          <GridView
            sx={{
              color: selectedLayout["grid"] ? "#f03637" : "inherit",
              "&:hover": { color: "#f03637" },
              cursor: "pointer",
              transition: "all 100ms ease-in",
            }}
          />
        </Box>
        <Box onClick={() => setSelectedLayout({ grid: false, list: true })}>
          <TableRows
            sx={{
              color: selectedLayout["list"] ? "#f03637" : "inherit",

              marginLeft: "10px",
              "&:hover": { color: "#f03637" },
              cursor: "pointer",
              transition: "all 100ms ease-in",
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          <Typography>View: </Typography>
          <ToolbarButton
            className={productNumber["twelve"] ? "active" : ""}
            onClick={() => productNumberHandler("twelve")}
          >
            12
          </ToolbarButton>
          /
          <ToolbarButton
            className={productNumber["twentyFour"] ? "active" : ""}
            onClick={() => productNumberHandler("twentyFour")}
          >
            24{" "}
          </ToolbarButton>
          /
          <ToolbarButton
            className={productNumber["all"] ? "active" : ""}
            onClick={() => productNumberHandler("all")}
          >
            All
          </ToolbarButton>
        </Box>
      </Box>
      <FormControl sx={{ width: { xs: "100%", sm: "200px" } }} size="small">
        <Select
          variant="outlined"
          displayEmpty
          value={selectedSorting}
          onChange={selectedSortingHandler}
        >
          <MenuItem value="">Default Sorting</MenuItem>
          <MenuItem value={"rating"}>Sort By Average Rating </MenuItem>
          <MenuItem value={"latest"}>Sort By Latest </MenuItem>
          <MenuItem value={"price-low-to-high"}>
            Sort By Price: low to high{" "}
          </MenuItem>
          <MenuItem value={"price-high-to-low"}>
            Sort By Price:high to low{" "}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Toolbar;
