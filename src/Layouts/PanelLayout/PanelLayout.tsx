import { AppBar, Drawer, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Aside, Main } from "../../Styles/Panel";
import Sidebar from "./Sidebar/Sidebar";
import { useTheme } from "@mui/material/styles";

function PanelLayout() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const mdMatches = useMediaQuery(theme.breakpoints.up("md"));

  console.log(!mdMatches);
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  return (
    <>
      {mdMatches && (
        <Aside className={menuOpen ? "" : "menu"}>
          <Sidebar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setDrawerOpen={setDrawerOpen}
          />
        </Aside>
      )}
      {!mdMatches && (
        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
          <Aside>
            <Sidebar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDrawerOpen={setDrawerOpen}
            />
          </Aside>
        </Drawer>
      )}
      <Main>
        <AppBar>
          <Contai
        </AppBar>
        <Outlet />
      </Main>
    </>
  );
}

export default PanelLayout;
