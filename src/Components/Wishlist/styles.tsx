import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const wrapperStyle = {
  margin: "0 auto",
  padding: "3rem 1rem",
};

export const wishlistTitle = {
  fontWeight: 600,
  color: "#333",
  mb: 4,
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

/* ================== Action Buttons =================== */
export const ActionWrapper = styled("div")(({ theme }) => ({
  margin: "1rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "left",
    gap: 12,
    "& .action": {
      width: "100%",
    },
  },
}));

export const ActionLeftBtns = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 6,
  mb: 1,
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    justifyContent: "flex-start",
  },
  [theme.breakpoints.down("md")]: {
    Button: {
      width: "100%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

/* ================== Action Buttons =================== */

/* ================== Table =====================  */

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  h6: {
    fontSize: "14px",
    color: theme.palette.common.digitaBlack,
    wordBreak: "break-word",
    [theme.breakpoints.between("sm", "md")]: {
      width: "80%",
      marginLeft: "10px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "15px",
    },
  },
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: "#777",
    fontSize: 16,
    padding: "17px 0",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    padding: "17px 0",

    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "&:nth-child(-n+7)": {
        border: "none",
      },
      "&.hidden": {
        display: "none",
      },
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "18px !important",
    },
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({}));

export const closeStyle = {
  width: "30px",
  height: "30px",
  display: "flex",
  borderRadius: "50%",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  transition: "0.2s",
  "&:hover": {
    backgroundColor: "#f03637",
    color: "#fff",
  },
  "&.img": {
    position: "absolute",
    top: "10px",
    right: "4px",
    display: { xs: "block", sm: "none" },
  },
};

/* ================== Table =====================  */
