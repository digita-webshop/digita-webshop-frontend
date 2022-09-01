import {
  LogoutOutlined,
  NightsStay,
  NotificationsActive,
  Search,
} from "@mui/icons-material";
import { Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import {
  MainSearchBtn,
  navbarIconStyles,
  panelToolbarStyles,
} from "../../../Styles/Panel";
import { PTextField } from "../../../Styles/panelCommon";
import { logout } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface Props {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  mdMatches: boolean;
}
function MainNavbar({ setDrawerOpen, mdMatches }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = (event: Event | SyntheticEvent) => {
    dispatch(logout());
    navigate("/", { replace: true });
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
            <IconButton sx={navbarIconStyles} onClick={logoutHandler}>
              <LogoutOutlined />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default MainNavbar;
