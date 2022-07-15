import { Box, Button, FormControl, FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.digitaRed,
  borderRadius: "5px",
  fontSize: "16px",
  height: "42px",
  "&:hover": { backgroundColor: theme.palette.common.digitaDarkRed },
}));
export const PTitle = styled("h1")(({ theme }) => ({
  fontFamily: "jost",
  fontSize: "32px",
  fontWeight: 500,
  textTransform: "capitalize",
  margin: 0,
}));
export const PTextField = styled("input")(({ theme }) => ({
  fontFamily: "jost",
  width: "100%",
  padding: "4px 12px",
  height: "42px",
  boxSizing: "border-box",
  border: `1px solid ${theme.palette.common.panelBorderGrey}`,
  borderRadius: "4px",
  transition: "all 100ms ease-in",
  "&:hover": {
    borderColor: theme.palette.common.digitaRed,
  },
  "&:focus": {
    boxShadow: `0 0 0 4px ${theme.palette.common.panelActiveRed}`,
    outline: "none",
    borderColor: theme.palette.common.digitaRed,
  },
  "&::placeholder": {
    fontSize: "16px ",
    color: theme.palette.common.panelGrey,
  },
}));
export const CardWrapper = styled(Box)(({ theme }) => ({
  padding: "20px",
  backgroundColor: "white",
  boxShadow: "0 0.1rem 0.25rem rgb(0 0 0 / 8%)",
  borderRadius: "4px",
}));

export const PFormControl = styled(FormControl)(({ theme }) => ({
  width: "100%",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.common.digitaRed} !important`,
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.common.digitaRed} !important`,
  },
}));

export const PFormLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: "15px",
  color: theme.palette.common.digitaBlack,
  textTransform: "capitalize",
  marginBottom: "2px",
}));
export const POutlinedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: "5px",
  fontSize: "16px",
  height: "42px",
  textTransform: "capitalize",
  color: theme.palette.common.digitaDarkRed,
  border: `1px solid ${theme.palette.common.digitaDarkRed}`,
  "&:hover": {
    backgroundColor: theme.palette.common.digitaDarkRed,
    color: theme.palette.common.white,
  },
}));
