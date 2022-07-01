import { Box, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Aside = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "20%",
}));

export const Main = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "0",
  width: "80%",
}));
export const PanelItem = styled(ListItem)(({ theme }) => ({
  a: {
    display: "flex",
    textDecoration: "none",
    color: theme.palette.common.PanelDarkRed,
  },
}));
