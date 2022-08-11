import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { PTextField, PFormControl } from "../../../Styles/panelCommon";

interface Props {
  selectedStatus: string;
  selectedAmount: string;
  selectedStatusHandler: (event: SelectChangeEvent) => void;
  selectedAmountHandler: (event: SelectChangeEvent) => void;
}

const GridHeader = ({
  selectedStatus,
  selectedAmount,
  selectedStatusHandler,
  selectedAmountHandler,
}: Props) => {
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
        <PTextField placeholder="Search... " />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "45%", lg: "30%" },
          display: "flex",
          gap: "10px",
        }}
      >
        <PFormControl size="small">
          <Select
            variant="outlined"
            displayEmpty
            value={selectedStatus}
            onChange={selectedStatusHandler}
          >
            <MenuItem value="status">All Category</MenuItem>
            <MenuItem value={"active"}>Electronics</MenuItem>
            <MenuItem value={"disable"}>Clothings</MenuItem>
            <MenuItem value={"show-all"}>Something else</MenuItem>
          </Select>
        </PFormControl>
        <PFormControl size="small">
          <Select
            variant="outlined"
            displayEmpty
            value={selectedAmount}
            onChange={selectedAmountHandler}
          >
            <MenuItem value="20">Latest Added</MenuItem>
            <MenuItem value={"30"}>Cheap First</MenuItem>
            <MenuItem value={"40"}>Most Viewed</MenuItem>
          </Select>
        </PFormControl>
      </Box>
    </Box>
  );
};

export default GridHeader;
