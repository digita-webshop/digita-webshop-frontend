import { Checkbox, TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TCell = styled(TableCell)(({ theme }) => ({
  fontSize: "16px",
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
  fontSize: "16px",
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
  "&.hiddenSm": {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "&:last-child": {
    textAlign: "right",
  },
}));

export const TCheckBox = styled(Checkbox)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    width: ".8em",
    height: ".8em",
  },
  "&.Mui-checked": {
    color: theme.palette.common.digitaRed,
  },
}));
