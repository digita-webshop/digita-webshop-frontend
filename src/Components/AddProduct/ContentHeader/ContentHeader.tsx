import { Box } from "@mui/material";
import { PButton, PTitle } from "../../../Styles/panelCommon";

function ContentHeader({ title }: { title: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <PTitle>{title}</PTitle>
      <PButton variant="contained" type="submit">
        publish
      </PButton>
    </Box>
  );
}

export default ContentHeader;
