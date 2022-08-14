import { styled, Paper } from "@mui/material";


export const ArticleWrapper = styled("div")(({ theme }) => ({
  margin: "2rem 0",
}));

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontSize: 10,
}));

export const titleWrapper = {
  paddingBottom: "1rem !important",

  webkitBoxOrient: "vertical",
  display: "webkitBox",
  overflow: "hidden !important",
  webkitLineClamp: 1,
  whiteSpace: "nowrap",
  "& .delete": {
    color: 'common.digitaRed',
  }
};

export const titleStyle = {
  width: "75%",
  color: "gray",
  fontSize: "15px",
  height: "45px",
  " -webkit-line-clamp": 2,
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  "&:hover": { color: "#f03637" },
};

export const editStyle = {
  borderRadius: "4px",
  padding: "0.5rem",
  backgroundColor: "#fff",
  color: "#333",
  fontWeight: 400,
  border: "1px solid #d8d8d8",
  fontSize: "15px",
  "&:hover": { backgroundColor: "transparent", borderColor: "#999" },
};


