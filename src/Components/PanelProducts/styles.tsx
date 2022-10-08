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
  padding: "6px 0 ",
  fontSize: "15px",
  height: "45px",
  " -webkit-line-clamp": 2,
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
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

export const PaginationList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const PaginationListItem = styled("li")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  border: "1px solid #d8d8d8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F6F6F6",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  fontFamily: "jost",
  color: "#333333",
  transition: "all 150ms ease-in",
  "&:hover": {
    backgroundColor: "#ffcaca",
  },
  "&.active": {
    backgroundColor: "#f03637",
    color: "white",
  },
});

/* ============== Delete modal =============== */

export const cartModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "2px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};
