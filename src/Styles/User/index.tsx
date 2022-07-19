import { Box, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Aside = styled(Box)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "white",
  width: "240px",

  [theme.breakpoints.up("md")]: {
    width: "20%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "15%",
  },
  height: "100%",
  padding: "0 10px",
  boxSizing: "border-box",
  borderRight: `1px solid ${theme.palette.common.panelHoverDarkGrey}`,
  "&.menu": {
    width: "65px",
  },
}));

export const Main = styled(Box)(({ theme }) => ({
  width: "100%",
  marginLeft: "auto",
  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "85%",
  },
  "&.menu": {
    width: "calc(100% - 65px)",
  },
}));

export const UserItem = styled(ListItem)(({ theme }) => ({
  fontFamily: "jost",
  padding: "3px 0",
  ".link": {
    padding: "8px 10px",
    borderRadius: "5px",
    transition: "background 150ms ease-in",
    display: "flex",
    textDecoration: "none",
    color: theme.palette.common.PanelDarkRed,
    width: "100%",
    "&.menu": {
      width: "50%",
      "& .MuiListItemIcon-root": {
        minWidth: "0",
      },
    },
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
    color: theme.palette.common.panelGrey,
  },
}));
