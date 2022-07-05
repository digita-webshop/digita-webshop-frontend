import { styled } from "@mui/material";

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

/* ==================== Product Item ================= */
export const cardWrapper = {
  width: "100%",
  border: "1px solid #d8d8d8",
  cursor: "pointer",
  "&:hover": { borderColor: "#999" },
};

export const titleWrapper = {
  paddingBottom: "1rem !important",

  webkitBoxOrient: "vertical",
  display: "webkitBox",
  overflow: "hidden !important",
  webkitLineClamp: 1,
  whiteSpace: "nowrap",
};

export const titleStyle = {
  color: "gray",
  fontSize: "18px",
  "&:hover": { color: "#f03637" },
};

export const deleteBtn = {
  borderRadius: "4px",
  backgroundColor: "#fff",
  border: "1px solid #f03637",
  color: "#f03637",
  fontSize: "16px",
  padding: "0.1rem 0.4rem 0.1rem 0 !important",
  "&:hover": { backgroundColor: "f03637", color: "#fff" },
};

export const editBtn = {
  borderRadius: "4px",
  backgroundColor: "#fff",
  color: "#333",
  fontWeight: 400,
  border: "1px solid #d8d8d8",
  fontSize: "16px",
  padding: "0.1rem 0.4rem 0.1rem 0 !important",
  "&:hover": { backgroundColor: "transparent", borderColor: "#999" },
};

/* ================== Pagination ================== */
export const paginationStyle = {
  paddingTop: "2rem",
  paddingBottom: "1.5rem",
  display: "flex",
  justifyContent: "flex-end",
};
