import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PButton, POutlinedButton, PTitle } from "../../../Styles/panelCommon";

interface Props {
  route: string;
  title: string;
}
function ContentHeader({ route, title }: Props) {
  const navigate = useNavigate();
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
      <PTitle>{title}</PTitle>
      <Box sx={{ display: "flex", width: { xs: "100%", sm: "unset" } }}>
        <POutlinedButton
          variant="contained"
          sx={{ width: "50%", paddingLeft: "11px" }}
          onClick={() => navigate(`${route}`)}
        >
          <Close fontSize={"small"} />
          discard
        </POutlinedButton>
        <PButton
          variant="contained"
          sx={{ width: "50%", marginLeft: "10px" }}
          type={"submit"}
        >
          publish
        </PButton>
      </Box>
    </Box>
  );
}

export default ContentHeader;
