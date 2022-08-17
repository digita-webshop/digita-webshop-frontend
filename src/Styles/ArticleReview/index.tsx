import { styled, TableCell } from "@mui/material";

export const TCell = styled(TableCell)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.common.digitaBlack,
  maxWidth: "180px",
  height: "60px",
  [theme.breakpoints.between("sm", "xl")]: {
    padding: "12px 1px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    padding: "10px 1px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
    padding: "8px 4px",
  },
}));
