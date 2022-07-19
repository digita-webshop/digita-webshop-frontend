import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Aside, Main } from "../../Styles/User";
import Sidebar from "./Sidebar/Sidebar";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

function UserLayout() {
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
      <Main className={menuOpen ? "" : "menu"}>
        <Box sx={{ padding: "30px 3%" }}>
          <Outlet />
        </Box>
      </Main>
    </>
  );
}

export default UserLayout;
