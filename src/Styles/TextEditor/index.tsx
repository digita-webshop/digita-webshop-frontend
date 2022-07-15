import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
export const TextEditorWrapper = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.common.panelGrey}`,
  borderRadius: "4px",
  "& .public-DraftEditor-content": {
    minHeight: "250px",
    padding: "10px",
  },
}));
export const EditorButton = styled(Button)(({ theme }) => ({
  borderRadius: "10px",
  fontSize: "12px",
  minWidth: "unset",
  "&:hover": {
    backgroundColor: theme.palette.common.panelHoverGrey,
  },
}));

export const textEditorStyles = {
  mb: "10px",
  display: "flex",
  justifyContent: "center",
  gap: "6px",
  flexWrap: "wrap",
  borderBottom: "1px solid",
  borderColor: "common.panelGrey",
  paddingY: "6px",
};
