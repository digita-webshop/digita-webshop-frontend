import { Box } from "@mui/material";
import { PButton, PTitle } from "styles/panel";

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
        {title.includes("add") ? "publish" : "save"}
      </PButton>
    </Box>
  );
}

export default ContentHeader;
