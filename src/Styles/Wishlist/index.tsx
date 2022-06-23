import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

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
    flexDirection: "column",
    Button: {
      width: "100%",
    },
  },
}));

/* ================== Action Buttons =================== */

/* ================== Table =====================  */

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: "#777",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  
}));

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
  }
}

/* ================== Table =====================  */
