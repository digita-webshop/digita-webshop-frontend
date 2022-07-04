import { FormControl, styled } from "@mui/material";

/* ================ Content Header ================ */
export const ContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));
export const simpleBtn = {
  borderRadius: "4px",
  padding: "0 1rem",
  fontSize: "16px",
  "&:hover": { borderColor: "#f03637", backgroundColor: "transparent" },
};
/* ================ Content Header ================ */



export const DashWrapper = styled("div")(({ theme }) => ({
  padding: "20px",
  backgroundColor: "white",
  boxShadow: "0 0.1rem 0.25rem rgb(0 0 0 / 8%)",
  borderRadius: "4px",
}));
