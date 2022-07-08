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
import MenuIcon from "@mui/icons-material/Menu";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import {
  MainSearchBtn,
  navbarIconStyles,
  panelAvatarStyles,
  panelToolbarStyles,
} from "../../../Styles/Panel";
import { PTextField } from "../../../Styles/panelCommon";
interface Props {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  mdMatches: boolean;
}
function MainNavbar({ setDrawerOpen, mdMatches }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const menuToggler = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const menuCloseHandler = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component={"div"}
      sx={{
        background: "white",
        position: "initial",
        height: mdMatches ? "74px" : "120px",
        borderBottom: "1px solid ",
        borderColor: "common.panelHoverDarkGrey",
      }}
      style={{ paddingRight: "0px !important" }}
    >
      <Toolbar
        sx={panelToolbarStyles}
        className={mdMatches ? "" : "menu-drawer"}
      >
        <Box sx={{ width: mdMatches ? "50%" : "100%", display: "flex" }}>
          <PTextField
            placeholder="Search term  "
            sx={{ borderTopRightRadius: "0", borderBottomRightRadius: "0" }}
          />
          <MainSearchBtn>
            <Search sx={{ color: "common.panelGrey", margin: "auto" }} />
          </MainSearchBtn>
        </Box>
        <Box display={"flex"} className={"menu-icons"}>
          <IconButton
            sx={{
              color: "common.digitaBlack",
              display: mdMatches ? "none" : "inline-flex",
            }}
            onClick={() => setDrawerOpen((prevState) => !prevState)}
          >
            <MenuIcon />
          </IconButton>
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
    </Box>
  );
}

export default MainNavbar;
