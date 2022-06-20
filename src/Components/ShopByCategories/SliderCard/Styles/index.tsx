import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const Name = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textTransform: "uppercase",
  fontSize: "14px",
  position: "absolute",
  bottom: "30px",
  width: "100%",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
    bottom: "10px",
  },
}));
