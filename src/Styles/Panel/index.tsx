import { Box, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Aside = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "20%",
  padding: "0 10px",
  boxSizing: "border-box",
}));

export const Main = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "0",
  width: "80%",
}));
export const PanelItem = styled(ListItem)(({ theme }) => ({
  fontFamily: "jost",

  a: {
    padding: "8px 10px",
    borderRadius: "5px",
    transition: "all 150ms ease-in",
    display: "flex",
    textDecoration: "none",
    color: theme.palette.common.PanelDarkRed,
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.common.panelHoverGrey,
    },
    "&.active": {
      backgroundColor: theme.palette.common.panelActiveRed,
      "&:hover": {
        backgroundColor: theme.palette.common.panelActiveRed,
      },
      "& .MuiListItemIcon-root": {
        color: theme.palette.common.digitaRed,
      },
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: "40px",
    display: "flex",
    alignItems: "center",
  },
}));
