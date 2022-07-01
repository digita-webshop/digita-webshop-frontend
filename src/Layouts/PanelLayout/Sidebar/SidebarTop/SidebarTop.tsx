import { MenuOpen } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../../Assets/Images/digita-logo.png";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}
function SidebarTop({ menuOpen, setMenuOpen }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: "20px",
        paddingX: menuOpen ? "10px" : "4px",
        img: { width: "120px", height: "32px" },
      }}
    >
      {menuOpen && (
        <Link to="/panel/dashboard">
          <img src={logoImg} alt="digita-logo" />
        </Link>
      )}
      <IconButton
        sx={{ "&:hover ": { background: "common.panelHoverGrey" } }}
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        <MenuOpen sx={{ color: "common.panelGrey", fontSize: "22px" }} />
      </IconButton>
    </Box>
  );
}

export default SidebarTop;
