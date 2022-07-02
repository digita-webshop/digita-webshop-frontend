import {
  ArrowDropDown,
  NightsStay,
  NotificationsActive,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import {
  MainSearch,
  MainSearchBtn,
  navbarIconStyles,
  panelAvatarStyles,
} from "../../../Styles/Panel";

function MainNavbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const menuToggler = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const menuCloseHandler = () => {
    setAnchorEl(null);
  };

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
      <Toolbar sx={{ height: "100%", justifyContent: "space-between" }}>
        <Box sx={{ width: "50%", display: "flex" }}>
          <MainSearch placeholder="Search term  " />
          <MainSearchBtn>
            <Search sx={{ color: "common.panelGrey", margin: "auto" }} />
          </MainSearchBtn>
        </Box>
        <Box display={"flex"}>
          <IconButton sx={navbarIconStyles}>
            <NightsStay />
          </IconButton>
          <IconButton sx={navbarIconStyles}>
            <NotificationsActive />
          </IconButton>
          <Box sx={panelAvatarStyles} id="user-button" onClick={menuToggler}>
            <img
              src="https://www.ecommerce-admin.com/demo/images/people/avatar1.jpg"
              alt="avatar"
            />
            <ArrowDropDown />
          </Box>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={menuCloseHandler}
          >
            <MenuItem onClick={menuCloseHandler}>Profile</MenuItem>
            <MenuItem onClick={menuCloseHandler}>Settings</MenuItem>
            <MenuItem
              onClick={menuCloseHandler}
              sx={{ color: "common.digitaRed" }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MainNavbar;
