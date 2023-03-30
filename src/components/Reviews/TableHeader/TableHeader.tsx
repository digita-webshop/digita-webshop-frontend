import { Dispatch, SetStateAction } from "react";
import { Box, Divider, MenuItem, Select } from "@mui/material";
import { CardWrapper, PFormControl, PTextField } from "styles/panel";

interface Props {
  setSearchValue: Dispatch<SetStateAction<string>>;
  reviewsPerPage: number;
  selectedAmountHandler: (event: any) => void;
}
function TableHeader({ setSearchValue, reviewsPerPage, selectedAmountHandler }: Props) {
  return (
    <CardWrapper sx={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "40%", lg: "30%" } }}>
          <PTextField placeholder="Search... " onChange={(e) => setSearchValue(e.target.value)} />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "35%", lg: "25%" },
            display: "flex",
            gap: "10px",
          }}
        >
          <PFormControl size="small">
            <Select variant="outlined" displayEmpty value={`${reviewsPerPage}`} onChange={selectedAmountHandler}>
              <MenuItem value="10">Show 10</MenuItem>
              <MenuItem value={"20"}>Show 20 </MenuItem>
              <MenuItem value={"30"}>Show 30</MenuItem>
            </Select>
          </PFormControl>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "common.panelBorderGrey", opacity: ".1" }} />
    </CardWrapper>
  );
}

export default TableHeader;
