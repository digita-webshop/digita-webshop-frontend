import { styled } from "@mui/material/styles";
import { Box, TableCell, tableCellClasses, Container } from "@mui/material";

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

export const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative",

  img: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      maxWidth: "60px",
    },
  },
  "& .MuiSvgIcon-root": {
    position: "absolute",
    top: "4px",
    right: "4px",
  },
}));

export const CustomBtn = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
  width: { xs: "50px", sm: "40px", lg: "50px" },
  height: { xs: "50px", sm: "40px", lg: "50px" },
  cursor: "pointer",
  fontSize: "20px",
  userSelect: "none",
};

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.between("sm", "lg")]: {
    padding: "10px 8px !important",
  },
  [`&.${tableCellClasses.head}`]: {
    padding: "11.2px",
    fontWeight: 600,
    textTransform: "uppercase",
    borderColor: "#ebebeb",
  },
  [`&.${tableCellClasses.body}`]: {
    padding: "11.2px",
    fontSize: 14,
    borderColor: "#ebebeb",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  span: {
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export const TotalTextStyle = {
  fontSize: "14px",
  color: "#777",
  lineHeight: "1.5em",
  textTransform: "capitalize",
};
export const closeButtonStyles = {
  border: "1px solid #333333",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.1rem",
  width: "25px",
  minWidth: "unset",
  height: "25px",
  "&:hover": {
    backgroundColor: "unset",
    borderColor: "#f03637",
    svg: {
      color: "#f03637",
    },
  },
};
