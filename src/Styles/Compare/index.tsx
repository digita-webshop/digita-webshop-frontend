import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CompareWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  width: "80%",
  maxWidth: "1536px",
  "& .title": {
    padding: "8px 0",
    backgroundColor: theme.palette.common.digitaRed,
    position: "relative",
    textAlign: "center",
    color: "white",
    h2: {
      fontSize: "26px",
      fontWeight: 600,
    },
    div: {
      backgroundColor: theme.palette.common.digitaBlack,
      position: "absolute",
      top: "14px",
      right: "14px",
      display: "flex",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "black",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "28px",
      },
    },
  },
}));
