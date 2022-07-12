import { TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TCell = styled(TableCell)(({ theme }) => ({
  fontSize: "18px",
  color: theme.palette.common.digitaBlack,
  maxWidth: "180px",
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

export const THCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.common.panelGrey,
    fontSize: "18px",
    fontWeight: 400,
    textTransform: "capitalize",
    [theme.breakpoints.between("sm", "xl")]: {
      padding: "12px 1px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      padding: "10px 1px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "8px 4px",
    },
    "&.hidden": {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    "&:last-child": {
      textAlign: "right",
    },
  }));