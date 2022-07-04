import { Box, FormControl, TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TCell = styled(TableCell)(({ theme }) => ({
  fontSize: "15px",
  color: theme.palette.common.digitaBlack,
  maxWidth: "180px",
  wordBreak: "break-all",
  [theme.breakpoints.between("sm", "lg")]: {
    padding: "12px 4px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "8px 4px",
  },
}));

export const TableButton = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  border: "1px solid",
  borderColor: theme.palette.common.panelBorderGrey,
  padding: "9px 10px",
  borderRadius: "3px",
  cursor: "pointer",
  "&:hover": {
    borderColor: theme.palette.common.panelGrey,
  },
}));

export const TBadge = styled(Box)(({ theme }) => ({
  textTransform: "capitalize",
  borderRadius: "15px",
  fontSize: "12px",
  padding: "2px 4px",
  backgroundColor: theme.palette.common.panelActiveRed,
  color: theme.palette.common.digitaRed,
  fontWeight: 500,
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    padding: "4px 8px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
  "&.pending": {
    color: "#98530c",
    backgroundColor: "#ffe8d0",
  },
  "&.received": {
    color: "#006d0e",
    backgroundColor: "#ccf0d1",
  },
}));

export const DashFormControl = styled(FormControl)(({ theme }) => ({
  width: "100%",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.common.digitaRed} !important`,
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.common.digitaRed} !important`,
  },
}));
