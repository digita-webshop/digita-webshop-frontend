import { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { DashFormControl } from "../../../Styles/Orders";
import { MainSearch } from "../../../Styles/Panel";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { tableStyle } from "../../../Styles/Brands"
interface Props {
  selectedStatus: string;
  selectedAmount: string;
  selectedStatusHandler: (event: SelectChangeEvent) => void;
  selectedAmountHandler: (event: SelectChangeEvent) => void;
}

const TableHeader = ({
  selectedStatus,
  selectedAmount,
  selectedStatusHandler,
  selectedAmountHandler,
}: Props) => {
  const [value, setValue] = useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <Box sx={tableStyle}>
      <Box sx={{ width: { xs: "100%", sm: "40%", lg: "30%" } }}>
        <MainSearch placeholder="Search... " sx={{ borderRadius: "4px" }} />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "45%", lg: "32%" },
          display: "flex",
          gap: "10px",
        }}
      >
        <DashFormControl size="small">
          <Select
            variant="outlined"
            displayEmpty
            value={selectedStatus}
            onChange={selectedStatusHandler}
          >
            <MenuItem value="status20">Status 20</MenuItem>
            <MenuItem value={"status30"}>Status 30</MenuItem>
            <MenuItem value={"status40"}>Status 40</MenuItem>
            <MenuItem value={"statusall"}>Status all</MenuItem>
          </Select>
        </DashFormControl>
        <DashFormControl size="small">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </DashFormControl>
      </Box>
    </Box>
  );
};

export default TableHeader;
