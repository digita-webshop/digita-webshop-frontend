import { Box, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Aside = styled(Box)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "white",
  width: "240px",
  zIndex: 1,

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
  "&.overflow": { overflowY: "overlay" },
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
export const PanelItem = styled(ListItem)(({ theme }) => ({
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

export const MainSearchBtn = styled(Box)(({ theme }) => ({
  width: "48px",
  border: "1px solid",
  borderColor: theme.palette.common.panelBorderGrey,
  display: "flex",
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "4px",
  cursor: "pointer",
  transition: "all 150ms ease-in",
  "&:hover": {
    borderColor: theme.palette.common.panelGrey,
  },
}));

export const navbarIconStyles = {
  "& .MuiSvgIcon-root": {
    color: "common.panelGrey",
    transition: "all 100ms ease-in",
  },
  "&:hover": {
    "& .MuiSvgIcon-root": { color: "common.digitaRed" },
  },
};
export const panelAvatarStyles = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  marginLeft: "5px",
  img: {
    width: "40px",
    borderRadius: "50%",
    border: "2px solid #eee",
    transition: "all 100ms ease-in",
    "&:hover ": {
      borderColor: "common.digitaRed",
    },
  },
  "& .MuiSvgIcon-root": {
    color: "common.panelGrey",
  },
};

export const panelToolbarStyles = {
  height: "100%",
  justifyContent: "space-between",
  "&.menu-drawer": {
    flexDirection: "column-reverse",
    justifyContent: "space-around",
    "& .menu-icons": {
      width: "100%",
      justifyContent: "space-between",
    },
  },
};

export const accordionDetailStyles = {
  fontFamily: "jost ",
  marginLeft: "34px",
  padding: "0px 16px 16px",
  a: {
    textDecoration: "none",
    display: "block",
    color: "common.digitaGrey1",
    margin: "10px 0",
    transition: "all 200ms",
    textTransform: "capitalize",
    "&:hover": {
      color: "common.digitaBlack",
    },
  },
};
export const accordionSummaryStyles = {
  padding: "8px 10px",
  width: "100%",
  minHeight: "unset !important",
  "& .MuiAccordionSummary-content": {
    margin: "0 !important",
  },
};
