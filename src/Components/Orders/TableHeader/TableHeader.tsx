import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { PFormControl, PTextField } from "../../../Styles/panelCommon";

interface Props {
  selectedStatus: string;
  selectedAmount: string;
  selectedStatusHandler: (event: SelectChangeEvent) => void;
  selectedAmountHandler: (event: SelectChangeEvent) => void;
}
function TableHeader({
  selectedStatus,
  selectedAmount,
  selectedStatusHandler,
  selectedAmountHandler,
}: Props) {
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
            <MenuItem value="status">Status</MenuItem>
            <MenuItem value={"active"}>Active</MenuItem>
            <MenuItem value={"disable"}>Disable </MenuItem>
            <MenuItem value={"show-all"}>Show All </MenuItem>
          </Select>
        </PFormControl>
        <PFormControl size="small">
          <Select
            variant="outlined"
            displayEmpty
            value={selectedAmount}
            onChange={selectedAmountHandler}
          >
            <MenuItem value="20">Show 20</MenuItem>
            <MenuItem value={"30"}>Show 30 </MenuItem>
            <MenuItem value={"40"}>Show 40</MenuItem>
          </Select>
        </PFormControl>
      </Box>
    </Box>
  );
}

export default TableHeader;
