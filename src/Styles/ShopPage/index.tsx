import { Box, Link, ListItemText, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FilterTitleWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingBottom: "20px",
  borderBottom: "1px solid #e9e9e9",
  "&.underline::before": {
    content: '""',
    position: "absolute",
    width: "40px",
    height: "2px",
    backgroundColor: "#f03637",
    left: 0,
    bottom: "-1px",
  },
}));

export const FilterListItemText = styled(ListItemText)(({ theme }) => ({
  color: "#333333",
  cursor: "pointer",
  transition: "all 200ms ease-in",
  textTransform: "capitalize",
  "&:hover": {
    color: "#f03637",
  },
  "&:hover::before": {
    backgroundColor: "#f03637",
  },
  "&::before": {
    content: '""',
    width: "4.5px",
    height: "5px",
    position: "absolute",
    left: 0,
    top: "18px",
    backgroundColor: "#999999",
    transition: "all 200ms ease-in",
  },
}));

export const PriceSlider = styled(Slider)(({ theme }) => ({
  color: "#f03637",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    boxShadow: "none",
    width: "15px",
    height: "15px",
    "&:hover": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: "#EBEBEB",
    opacity: 1,
    height: 6,
  },
}));
export const ToolbarButton = styled(Link)(({ theme }) => ({
  color: "#999999",
  fontSize: "16px",
  fontWeight: "400",
  minWidth: "unset",
  boxShadow: "none",
  cursor: "pointer",
  textDecoration: "none",
  fontFamily: "jost",
  paddingRight: "5px",
  paddingLeft: "5px",
  "&:hover": {
    backgroundColor: "white",
    color: theme.palette.text.primary,
  },
  "&.active": {
    color: theme.palette.text.primary,
  },
}));
