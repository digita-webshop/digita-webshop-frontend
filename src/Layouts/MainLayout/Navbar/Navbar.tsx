import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useMediaQuery,
  Fade,
  SelectChangeEvent,
  Collapse,
  Modal,
} from "@mui/material";
import logoImg from "../../../Assets/Images/digita-logo.png";
import { navbarItems } from "../../../Services/Utils/Data/data";
import { useTheme } from "@mui/material/styles";

import { MenuRounded, KeyboardArrowDown } from "@mui/icons-material";
import { Fragment, useEffect, useState } from "react";
import { AntTab, AntTabs, menuIconStyles } from "../../../Styles/Appbar";
import TabDrawer from "./TabDrawer/TabDrawer";
import ShopDrawer from "./ShopDrawer/ShopDrawer";
import SearchBar from "./SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import ShopMenu from "./ShopMenu/ShopMenu";
import { Login, Register, ResetPassword } from "../../../Components";
import Icons from "./Icons/Icons";

function Navbar() {
  const [displayShopMenu, setDisplayShopMenu] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const [modalType, setModalType] = useState("login");

  const [displayDrawer, setDisplayDrawer] = useState({
    left: false,
    right: false,
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { pathname } = useLocation();

  const selectedCategoryHandler = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  type Anchor = "left" | "right";

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    if (!matches) {
      setDisplayDrawer({ ...displayDrawer, [anchor]: open });
    }
  };
  const loginModalHandler = (open: boolean) => () => {
    setOpenLoginModal(open);
  };

  const openSearchBarHandler = () => {
    setOpenSearchBar((prevOpenSearchBar) => !prevOpenSearchBar);
  };

  const showShopMenuHandler = (tabName: string) => {
    if (tabName === "shop") {
      setDisplayShopMenu(true);
    } else {
      setDisplayShopMenu(false);
    }
  };
  const closeLoginModal = () => {
    setOpenLoginModal(false);
  };

  type Modal = "login" | "register" | "reset";

  const modalTypeToggle = (type: Modal) => {
    setModalType(type);
  };

  useEffect(() => {
    let lastScroll = window.scrollY;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 180 && lastScroll < window.scrollY) {
        setCollapse(false);
      } else {
        setCollapse(true);
      }
      lastScroll = window.scrollY;
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Fragment>
      <AppBar
        sx={{
          backgroundColor: "white",
          position: "fixed ",
          boxShadow: "4px 2px 4px 1px rgb(0 0 0 / 12%)",
        }}
      >
        <Collapse in={collapse} timeout={600}>
          <Container maxWidth={"xl"} sx={{ position: "relative" }}>
            <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
              <Box>
                <Box onClick={toggleDrawer("left", true)}>
                  <MenuRounded sx={menuIconStyles} />
                </Box>
              </Box>
              <Box sx={{ marginRight: { sx: "0", md: "30px" } }}>
                <img src={logoImg} alt="digita-logo" />
              </Box>

              {!openSearchBar && (
                <Fragment>
                  <AntTabs value={pathname}>
                    {navbarItems.map((item) => (
                      <AntTab
                        key={item.id}
                        label={item.name}
                        component={Link}
                        icon={item.name === "shop" && <KeyboardArrowDown />}
                        iconPosition="right"
                        value={`${item.route}`}
                        to={`${item.route}`}
                        onMouseEnter={() => showShopMenuHandler(item.name)}
                        sx={{
                          color:
                            displayShopMenu && item.name === "shop"
                              ? "#f03637"
                              : "",
                          borderBottom:
                            displayShopMenu && item.name === "shop"
                              ? "3px solid #f03637"
                              : "",
                        }}
                      />
                    ))}
                  </AntTabs>
                  <Icons
                    openSearchBarHandler={openSearchBarHandler}
                    loginModalHandler={loginModalHandler}
                    matches={matches}
                    toggleDrawer={toggleDrawer}
                  />
                </Fragment>
              )}
              <Fade
                style={{ display: openSearchBar ? "block" : "none" }}
                in={openSearchBar}
              >
                <Box width={"100%"}>
                  <SearchBar
                    selectedCategory={selectedCategory}
                    selectedCategoryHandler={selectedCategoryHandler}
                    openSearchBarHandler={openSearchBarHandler}
                  />
                </Box>
              </Fade>
            </Toolbar>
          </Container>
          {/*--------------------- drawers ---------------- */}
          <ShopDrawer
            displayDrawer={displayDrawer}
            toggleDrawer={toggleDrawer}
          />
          <TabDrawer
            displayDrawer={displayDrawer}
            toggleDrawer={toggleDrawer}
          />

          <Fade
            style={{ display: displayShopMenu ? "block" : "none" }}
            in={displayShopMenu}
          >
            <Box
              paddingY={3}
              paddingX={1}
              sx={{
                border: "1px solid #dedede",
                boxSizing: "border-box",
                backgroundColor: "white",
                position: "absolute",
                left: 0,
                right: 0,
                top: 90,
              }}
              onMouseLeave={() => setDisplayShopMenu(false)}
            >
              <ShopMenu />
            </Box>
          </Fade>
        </Collapse>
      </AppBar>
      <Box sx={{ marginTop: { xs: "64px", md: "90px" } }}></Box>
      <Modal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <>
          {modalType === "login" && (
            <Login
              closeLoginModal={closeLoginModal}
              modalTypeToggle={modalTypeToggle}
            />
          )}
          {modalType === "register" && (
            <Register
              closeLoginModal={closeLoginModal}
              modalTypeToggle={modalTypeToggle}
            />
          )}
          {modalType === "reset" && (
            <ResetPassword
              closeLoginModal={closeLoginModal}
              modalTypeToggle={modalTypeToggle}
            />
          )}
        </>
      </Modal>
    </Fragment>
  );
}

export default Navbar;
