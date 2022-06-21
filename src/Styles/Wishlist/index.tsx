import { styled } from "@mui/material";

export const wrapperStyle = {
  margin: "3rem auto",
  padding: "0 1rem",
};

export const wishlistTitle = {
  fontWeight: "bold",
  color: "#222",
  mb: 8,
};

/* =================== Social =============== */

export const socialBox = {
  margin: "2rem 0",
  display: "flex",
  justifyContent: {
    xs: "center",
    sm: "center",
    md: "flex-start",
    lg: "flex-end",
    xl: "flex-start",
  },
  alignItems: "center",
};

export const SocialFlex = styled("div")(({ theme }) => ({
  display: " flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

/* =================== Social =============== */