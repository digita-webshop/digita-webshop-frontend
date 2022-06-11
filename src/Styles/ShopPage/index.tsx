import { Box } from "@mui/material";
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
