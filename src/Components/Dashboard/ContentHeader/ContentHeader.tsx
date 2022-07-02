import { Box } from "@mui/material";
import { PButton, PTitle } from "../../../Styles/panelCommon";

function ContentHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <PTitle>dashboard</PTitle>
      <PButton variant="contained">create report</PButton>
    </Box>
  );
}

export default ContentHeader;
