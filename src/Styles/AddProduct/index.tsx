import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ColorInput = styled(Box)(({ theme }) => ({
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  cursor: "pointer",
}));
export const ColorPickerWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  input: { position: "absolute", visibility: "hidden" },
}));

export const tagStyles = {
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  cursor: "pointer",
  border: "1px solid ",
  borderColor: "common.panelHoverDarkGrey",
  borderRadius: "4px",
  boxSizing: "border-box",
  color: "common.digitaBlack",
  "&:hover": {
    borderColor: "common.panelGrey",
  },
  span: {
    fontSize: "14px",
  },
};

export const tagContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "20px",
  gap: "10px",
};

export const tagIconStyles = {
  color: "common.panelGrey",
  fontSize: "18px",
  marginLeft: "4px",
};
export const categoryCheckboxStyles = {
  padding: "0 6px 0 0 ",
  "&.Mui-checked": {
    color: "common.digitaRed",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "20px",
  },
};

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: "auto",
  maxHeight: "168px",
  maxWidth: "168px",
  width: "100%",
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    height: "60%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "&.main": {
    height: "calc(100vmin - 67px)",
    maxHeight: "unset",
    maxWidth: "unset",
    [theme.breakpoints.up("sm")]: {
      height: "89%",
    },
    "& .MuiSvgIcon-root": {
      top: "10px",
      right: "6px",
      padding: "12px",
      fontSize: "30px",
    },
  },
  input: {
    visibility: "hidden",
    position: "absolute",
    width: "100%",
  },
  "& .MuiSvgIcon-root": {
    boxShadow: "0px 0px 8px 0px rgb(0 0 0 / 15%)",
    position: "absolute",
    top: "10px",
    right: "6px",
    backgroundColor: "white",
    borderRadius: "4px",
    padding: "8px",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      top: "5px",
      padding: "6px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "4px",
      fontSize: "18px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "8px",
      fontSize: "22px",
    },
  },
}));
