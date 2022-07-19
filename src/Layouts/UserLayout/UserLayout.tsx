import { Box } from "@mui/material";
import { useState } from "react";
import { Aside, Main } from "../../Styles/User";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function UserLayout() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <Aside className={menuOpen ? "" : "menu"}>
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Aside>
      <Main className={menuOpen ? "" : "menu"}>
        <Box sx={{ padding: "30px 3%" }}>
          <Outlet />
        </Box>
      </Main>
    </>
  );
}

export default UserLayout;
