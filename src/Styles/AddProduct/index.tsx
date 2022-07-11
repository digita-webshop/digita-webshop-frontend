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
