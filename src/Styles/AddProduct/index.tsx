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
