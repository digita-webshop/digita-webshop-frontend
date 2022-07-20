import { Box } from "@mui/material";
import { useState } from "react";
import { Aside, Main, UserWrapper } from "../../Styles/User";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function UserLayout() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <UserWrapper>
        <Aside className="aside">
          <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </Aside>
        <Main className="main">
          <Box>
            <Outlet />
          </Box>
        </Main>
      </UserWrapper>
    </>
  );
}

export default UserLayout;
