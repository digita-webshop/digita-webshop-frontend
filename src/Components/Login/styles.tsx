import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  width: "500px",
  form: {
    padding: "10px 100px",
  },
  h2: {
    color: "#333333",
    fontSize: "28px",
    fontWeight: 500,
    marginBottom: "10px",
  },
  h6: {
    color: "#333333",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    form: {
      padding: "10px 30px ",
    },
  },
  "& .close-button": {
    position: "absolute",
    top: "-15px",
    right: "15px",
    cursor: "pointer",
    transition: "all 100ms ease-in",
    opacity: ".5",
    "&:hover": {
      opacity: "1",
    },
  },
}));
export const FormFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "1px solid #ebebeb",
  padding: "20px 0 ",
  marginTop: "30px",
  span: { color: "#333333", fontSize: "14px" },
  button: {
    textTransform: "uppercase",
    marginLeft: "10px",
    width: "120px",
    height: "45px",
  },
}));
export const errorStyles = {
  backgroundColor: "#e2401c",
  textAlign: "center",
  paddingY: "12px",
  span: { fontSize: "11px", color: "white" },
};
export const forgetPassStyles = {
  color: "#777777",
  fontSize: "12px",
  fontFamily: "jost",
  cursor: "pointer",
  transition: "all 100ms ease-in",
  "&:hover": { color: "#f03637" },
};
export const inputErrorStyles = {
  "& .MuiInput-root::before ": {
    borderBottom: "1px solid #f03637",
  },
  "& .MuiInput-root:hover::before": {
    borderBottom: "2px solid #f03637",
  },
  "& .MuiInput-root::after ": {
    borderBottom: "2px solid #f03637",
  },
};
