import { Box, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const UserWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 12,
  margin: "40px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const Aside = styled(Box)(({ theme }) => ({
  marginTop: "40px",
  backgroundColor: "white",
  width: "30%",
  borderRadius: "12px",
  border: `1px solid ${theme.palette.common.panelHoverDarkGrey}`,
  padding: "0 10px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const Main = styled(Box)(({ theme }) => ({
  marginTop: "40px",
  padding: "30px",
  width: "100%",
  border: `1px solid ${theme.palette.common.panelHoverDarkGrey}`,
  borderRadius: "12px",
  [theme.breakpoints.down("lg")]: {
    width: "95%",
  },
  [theme.breakpoints.down("md")]: {
    width: "94%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "92%",
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

    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.common.panelHoverGrey,
    },
    "&.active": {
      backgroundColor: theme.palette.common.panelActiveRed,
      borderLeft: "7px solid red",
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

export const userAvatarStyle = {
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

export const UserNavItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0.8rem 0",
  padding: ".8rem .5rem 0 .4rem",
}));

export const topMenuItem = {
  color: "common.digitaRed",
  cursor: "pointer",
};
