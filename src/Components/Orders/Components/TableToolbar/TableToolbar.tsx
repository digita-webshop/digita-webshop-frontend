import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { PFormControl } from "../../../../styles/panel";

interface Props {
  selectedStatus: string;
  ordersPerPage: number;
  selectedStatusHandler: (event: SelectChangeEvent) => void;
  selectedAmountHandler: (event: SelectChangeEvent) => void;
}
function TableToolbar({
  selectedStatus,
  ordersPerPage,
  selectedStatusHandler,
  selectedAmountHandler,
}: Props) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "45%", lg: "30%" },
        display: "flex",
        gap: "10px",
        marginLeft: "auto",
      }}
    >
      <PFormControl size="small">
        <Select
          variant="outlined"
          displayEmpty
          value={selectedStatus}
          onChange={selectedStatusHandler}
        >
          <MenuItem value="">Status</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="cancelled">Cancelled </MenuItem>
          <MenuItem value="delivered">Delivered </MenuItem>
        </Select>
      </PFormControl>
      <PFormControl size="small">
        <Select
          variant="outlined"
          displayEmpty
          value={String(ordersPerPage)}
          onChange={selectedAmountHandler}
        >
          <MenuItem value="20">Show 20</MenuItem>
          <MenuItem value="30">Show 30 </MenuItem>
          <MenuItem value="40">Show 40</MenuItem>
        </Select>
      </PFormControl>
    </Box>
  );
}

export default TableToolbar;
