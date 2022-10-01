import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Card = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  img: {
    maxWidth: "100%",
    height: "auto",
    AspectRatio: "1.4",
  },
}));
export const textStyle = { fontSize: "15px", color: "#777777" };
export const iconStyle = {
  fontSize: "1rem",
  marginRight: "5px",
  color: "#777777",
};
