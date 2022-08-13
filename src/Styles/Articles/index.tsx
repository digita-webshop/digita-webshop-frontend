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

export const titleStyle = {
  color: "gray",
  fontSize: "15px",
  height: "45px",
  " -webkit-line-clamp": 2,
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  "&:hover": { color: "#f03637" },
};