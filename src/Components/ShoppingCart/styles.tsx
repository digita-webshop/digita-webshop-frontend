import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const TableContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const CartContainer = styled(Container)(({ theme }) => ({
  background: "white",
  [theme.breakpoints.up("md")]: {
    padding: "50px 16px",
  },
}));
