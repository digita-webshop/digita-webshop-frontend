import { styled } from "@mui/material/styles";

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
  margin: 6,
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
    backgroundColor: "#f03637",
    color: "white",
  },
  "&.active": {
    backgroundColor: "#f03637",
    color: "white",
  },
});
