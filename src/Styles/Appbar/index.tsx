import { styled } from "@mui/material/styles";
import { Tab, Tabs, Box, Typography, Button } from "@mui/material";

interface StyledTabProps {
  label: string;
  component: any;
  value: string;
  iconPosition?: any;
}

export const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "capitalize",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  height: "90px",
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: 15,
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.85)",
  borderBottom: "3px solid white",

  "&:hover": {
    color: "#f03637",
    borderBottom: "3px solid #f03637",
  },
  "&.Mui-selected": {
    color: "#333333",
  },
}));

export const AntTabs = styled(Tabs)(({ theme }) => ({
  overflow: "visible !important",
  "& .MuiTabs-scroller ": {
    overflow: "visible !important",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "#f03637",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  position: "relative",
}));

export const ShopSubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: "capitalize",
  [theme.breakpoints.up("md")]: {
    fontSize: "15px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "16px",
  },
  fontWeight: 400,
  transition: "all 150ms ease-in",
  cursor: "pointer",
  marginBottom: "6px",
  "&:hover": { color: "#f03637" },
}));

export const ShopMenuButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  border: "1px solid white",
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "#f03637",
  },
  transition: "all 200ms ease-in",
  marginTop: "25px",
  [theme.breakpoints.up("md")]: {
    width: "100px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "120px",
  },
}));

export const menuIconStyles = {
  display: {
    sx: "block",
    md: "none",
  },
  fontSize: "35px",
  color: "common.digitaBlack",
  cursor: "pointer",
  "&:hover": { color: "#f03637" },
};

export const IconWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  cursor: "pointer",
  "&:hover .MuiSvgIcon-root": { color: theme.palette.common.digitaRed },
}));
export const ShopMenuWrapper = styled(Box)(({ theme }) => ({
  border: "1px solid #dedede",
  boxSizing: "border-box",
  backgroundColor: "white",
  position: "absolute",
  left: "-269px",
  right: 0,
  top: 90,
  padding: "24px 8px",
  display: "none",
  cursor: "initial",
  [theme.breakpoints.up("md")]: {
    width: "100vw",
  },
  [theme.breakpoints.up("xl")]: {
    width: "1560px",
  },
}));

export const appBarStyles = {
  backgroundColor: "white",
  position: "fixed ",
  boxShadow: "4px 2px 4px 1px rgb(0 0 0 / 12%)",
};
