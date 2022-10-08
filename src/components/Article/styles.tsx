import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontSize: 10,
}));
export const articleTitleStyles = {
  fontSize: { xs: "24px", sm: "28px", md: "35px" },
  fontWeight: "400",
  color: "#333",
  marginBottom: "15px",
};

export const inputStyles = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#F5F5F5",
    height: { xs: "50px", md: "40px" },
  },
};
