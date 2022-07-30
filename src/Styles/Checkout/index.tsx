import {
  Box,
  FormControlLabel,
  Radio,
  TableRow,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
export const OrderRow = styled(TableRow)(({ theme }) => ({
  td: {
    "&:first-of-type": {
      fontWeight: 600,
      borderRight: "1px solid #ebebeb",
    },
    "&:last-of-type": {
      textAlign: "right",
    },
  },
  th: {
    fontSize: "15px",
    padding: "20px 16px",
    fontWeight: 600,
    color: theme.palette.common.digitaBlack,

    "&:first-of-type": {
      borderRight: "1px solid #ebebeb",
    },
    "&:last-of-type": {
      textAlign: "right",
    },
  },
}));

export const CustomRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.common.digitaBlack,
  "&.Mui-checked": { color: theme.palette.common.digitaRed },
  "& .MuiSvgIcon-root": {
    fontSize: "20px",
  },
}));

export const paymentTitleStyles = {
  flexShrink: 0,
  color: "common.digitaGrey",
  fontSize: "16px",
  fontWeight: 600,
};
export const accordionDetailStyles = {
  backgroundColor: "white",
  color: "common.digitaBlack",
  width: "85%",
  margin: "auto    ",
  span: {
    fontSize: "13px",
  },
};

export const CheckoutInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.common.digitaGrey5,
    height: "40px",
    "& fieldset": {
      borderColor: "#bbb",
    },
    "&:hover fieldset": {
      borderColor: "#bbb",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#bbb",
      borderWidth: "2px",
    },
  },
}));
export const InputWrapper = styled(Box)(({ theme }) => ({
  "& .input": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "7px",
    cursor: "pointer",
    border: `1px solid ${theme.palette.common.digitaGrey2}`,
    width: "100%",
    borderRadius: "4px",
    fontFamily: "jost",
    boxSizing: "border-box",
    backgroundColor: theme.palette.common.digitaGrey5,
    "&:hover": {
      borderColor: theme.palette.common.digitaGrey3,
    },
  },
  ul: {
    maxHeight: "300px",
    overflow: "auto",
    padding: "6px 0",
    position: "absolute",
    top: "45px",
    zIndex: 100,
    backgroundColor: theme.palette.common.digitaGrey7,
    width: "100%",
    listStyle: "none",
    boxSizing: "border-box",
    li: {
      fontFamily: "jost",
      padding: "5px 10px",
      cursor: "pointer",
      transition: "all 100ms ease-in",
      "&:hover": {
        backgroundColor: "#e4e4e4",
      },
    },
  },
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  margin: "0",
  "& .MuiFormControlLabel-label": {
    color: theme.palette.common.digitaGrey,
    fontSize: "14px",
    fontWeight: 500,
  },
  "& .MuiCheckbox-root": {
    color: theme.palette.common.digitaRed,
    "&.Mui-checked": {
      color: theme.palette.common.digitaRed,
    },
  },
}));
