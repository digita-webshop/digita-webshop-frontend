import { Box } from "@mui/material";
import logoImg from "../../../Assets/Images/digita-logo.png";
function Sidebar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <img src={logoImg} alt="digita-logo" />
    </Box>
  );
}

export default Sidebar;
