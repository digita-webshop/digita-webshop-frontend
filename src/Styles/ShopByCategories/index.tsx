import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import bgCat from "../../Assets/Images/ShopByCat/bg-cats.jpg";

export const WrapperBox = styled(Box)(({ theme }) => ({
  backgroundAttachment: "fixed",
  backgroundImage: `url(${bgCat})`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "175px 0 205px",
  display: "flex",
  justifyContent: "center",
  ".loading": {
    alignSelf: "center",
    marginBottom: "45px",
  },
  "&.slideInFromBottom": {
    animation: `slideInFromBottom 1000ms ${theme.transitions.easing.easeInOut}`,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "32px",
  fontWeight: 600,
  textAlign: "center",
  textTransform: "uppercase",
  marginBottom: "12px",
}));

export const boxStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
