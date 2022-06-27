import { Radio, TableRow, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
export const OrderRow = styled(TableRow)(({ theme }) => ({
  td: {
    "&:first-child": {
      fontWeight: 600,
      borderRight: "1px solid #ebebeb",
    },
    "&:last-child": {
      textAlign: "right",
    },
  },
  th: {
    fontSize: "15px",
    padding: "20px 16px",
    fontWeight: 600,
    color: theme.palette.common.digitaBlack,

    "&:first-child": {
      borderRight: "1px solid #ebebeb",
    },
    "&:last-child": {
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
