import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Aside, Main, UserWrapper } from "../../styles/user";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../MainLayout/Navbar/Navbar";

function UserLayout() {
  const { pathname } = useLocation();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Navbar />
      <UserWrapper maxWidth={"xl"}>
        <Box>
          {matches ? (
            <Aside className="aside">
              <Sidebar />
            </Aside>
          ) : (
            pathname === "/user" && (
              <Aside className="aside">
                <Sidebar />
              </Aside>
            )
          )}
          <Main className="main">
            <Box>
              <Outlet />
            </Box>
          </Main>
        </Box>
      </UserWrapper>
    </>
  );
}

export default UserLayout;
