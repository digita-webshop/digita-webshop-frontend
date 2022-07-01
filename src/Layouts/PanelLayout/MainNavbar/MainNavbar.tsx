import { Search } from "@mui/icons-material";
import { AppBar, Box, Toolbar } from "@mui/material";
import { MainSearch, MainSearchBtn } from "../../../Styles/Panel";

function MainNavbar() {
  return (
    <AppBar
      sx={{
        background: "white",
        position: "initial",
        height: "74px",
        borderBottom: "1px solid ",
        borderColor: "common.panelHoverDarkGrey",
      }}
    >
      <Toolbar sx={{ height: "100%" }}>
        <Box sx={{ width: "50%", display: "flex" }}>
          <MainSearch placeholder="Search term  " />
          <MainSearchBtn>
            <Search sx={{ color: "common.panelGrey", margin: "auto" }} />
          </MainSearchBtn>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MainNavbar;
