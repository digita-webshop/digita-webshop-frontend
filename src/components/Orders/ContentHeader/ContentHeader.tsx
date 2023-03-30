import { Add } from "@mui/icons-material";
import { Box } from "@mui/material";
import { PButton, PTitle } from "styles/panel";

function ContentHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <PTitle>orders</PTitle>
      <PButton variant="contained" sx={{ gap: "4px", paddingX: "10px" }}>
        <Add />
        create new
      </PButton>
    </Box>
  );
}

export default ContentHeader;
