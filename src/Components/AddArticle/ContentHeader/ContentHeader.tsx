import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";
import { PButton, POutlinedButton, PTitle } from "../../../Styles/panelCommon";

function ContentHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <PTitle>add article</PTitle>
      <Box sx={{ display: "flex", width: { xs: "100%", sm: "unset" } }}>
        <POutlinedButton
          variant="contained"
          sx={{ width: "50%", paddingLeft: "11px" }}
        >
          <Close fontSize={"small"} />
          discard
        </POutlinedButton>
        <PButton variant="contained" sx={{ width: "50%", marginLeft: "10px" }}>
          publish
        </PButton>
      </Box>
    </Box>
  );
}

export default ContentHeader;
