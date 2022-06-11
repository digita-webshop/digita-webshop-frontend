import { Box, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FilterTitleWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingBottom: "20px",
  borderBottom: "1px solid #e9e9e9",
  "&::before": {
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
