import { MenuOpen } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import logoImg from "../../../../Assets/Images/digita-logo.png";

function SidebarTop() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        img: { width: "120px", height: "32px" },
      }}
    >
      <Link to="/panel/dashboard">
        <img src={logoImg} alt="digita-logo" />
      </Link>
      <IconButton sx={{ "&:hover ": { background: "common.panelHoverGrey" } }}>
        <MenuOpen sx={{ color: "common.panelGrey", fontSize: "22px" }} />
      </IconButton>
    </Box>
  );
}

export default SidebarTop;
