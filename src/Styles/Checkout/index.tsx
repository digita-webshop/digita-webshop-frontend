import { Radio, TableRow } from "@mui/material";
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
  width: "33%",
  flexShrink: 0,
  color: "common.digitaGrey",
  fontSize: "16px",
  fontWeight: 600,
};
