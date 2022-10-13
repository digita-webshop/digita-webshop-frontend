import { Box, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const UserWrapper = styled(Box)(({ theme }) => ({
  padding: "40px",
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
  margin: "auto",
}));

export const Aside = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  // width: "25%",
  borderRadius: "12px",
  padding: "10px",
  border: `1px solid ${theme.palette.common.panelHoverDarkGrey}`,
  [theme.breakpoints.down("lg")]: {
    // width: "91%",
  },
  [theme.breakpoints.up("md")]: {
    position: "fixed",
    width: "24%",
    padding: "0 10px",
    maxWidth: "422px",
  },
  [theme.breakpoints.down("sm")]: {
    // width: "84%",
  },
}));

export const Main = styled(Box)(({ theme }) => ({
  /* padding: "30px", */
  // width: "100%",
  marginLeft: "auto",
  /* border: `1px solid ${theme.palette.common.panelHoverDarkGrey}`, */
  borderRadius: "12px",
  [theme.breakpoints.up("md")]: {
    width: "70%",
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
  "&.hidden": {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
    aspectRatio: "1",
    objectFit: "cover",
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
  "&:hover": {
    "& .navIcon": {
      transition: "0.2s",
      marginLeft: "0.4rem",
    },
  },
};

/* =================== Profile ===================== */
export const wrapper = {
  padding: "20px",
  overflow: "auto",
  "& .orderImg": {
    width: "80px",
  },
  "&.sidebar": {
    border: "none",
    display: { md: "none" },
  },
};

export const profileWrapper = {
  cursor: "pointer",
  // padding: "30px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: { xs: "6px", sm: "16px" },
  img: {
    width: { xs: "40px", sm: "auto" },
  },
};

/* ============================== Latest shops =========================== */

export const shopWrapper = {
  display: "flex",
  flexBasis: "100px",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.10)",
  gap: 1,
  margin: "2rem 0",
};

/* ============= Wishlist ============ */
export const cardWrapper = {
  width: "100%",
  cursor: "pointer",
  boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.10)",
};

export const deleteBtn = {
  borderRadius: "4px",
  backgroundColor: "#fff",
  border: "1px solid #d8d8d8",
  color: "#555",
  fontSize: "16px",
  padding: "0.1rem 0.4rem 0.1rem 0 !important",
  "&:hover": { backgroundColor: "#999", color: "#fff" },
};

export const addBtn = {
  borderRadius: "4px",
  backgroundColor: "#fff",
  color: "common.digitaRed",
  fontWeight: 400,
  border: "1px solid #f03637",
  fontSize: { sx: "16px", md: "13px", lg: "16px" },
  padding: "0.1rem 0.4rem 0.1rem 0 !important",
  "&:hover": {
    backgroundColor: "#f03637",
    color: "#fff",
    borderColor: "common.digitaRed",
    "& .addIcon": {
      transition: "0.15s",
      color: "#fff",
    },
  },
  "& .addIcon": {
    margin: "0 0.2rem",
    color: "common.digitaRed",
    fontSize: { xs: "24px", md: "18px", lg: "24px" },
  },
};

export const addressBtn = {
  borderRadius: "4px",
  backgroundColor: "#fff",
  color: "common.digitaRed",
  fontWeight: 400,
  border: "1px solid #f03637",
  fontSize: "16px",
  padding: "0.5rem",
  "&:hover": {
    backgroundColor: "#f03637",
    color: "#fff",
    borderColor: "common.digitaRed",
    "& .addIcon": {
      transition: "0.15s",
      color: "#fff",
    },
  },
};

export const between = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

/* =================== Personal info ==================== */
export const CardWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: "4px",
}));
