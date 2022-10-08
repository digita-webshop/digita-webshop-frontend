import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const WrapperBox = styled(Box)(({ theme }) => ({
  backgroundAttachment: "fixed",
  backgroundImage: `url(https://res.cloudinary.com/dmgb7kvmn/image/upload/v1665232247/digita-images/static/ey69ycyc41vqregys5tq.jpg)`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "175px 0 130px",
  [theme.breakpoints.up("sm")]: {
    padding: "175px 0 205px",
  },
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

export const Card = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  img: {
    maxWidth: "100%",
    height: "auto",
  },
}));
