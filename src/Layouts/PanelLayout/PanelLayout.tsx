import { Drawer, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Aside, Main } from "../../Styles/Panel";
import Sidebar from "./Sidebar/Sidebar";
import { useTheme } from "@mui/material/styles";
import MainNavbar from "./MainNavbar/MainNavbar";

function PanelLayout() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const mdMatches = useMediaQuery(theme.breakpoints.up("md"));

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
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
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
        <MainNavbar setDrawerOpen={setDrawerOpen} mdMatches={mdMatches} />
        <Outlet />
      </Main>
    </>
  );
}

export default PanelLayout;
