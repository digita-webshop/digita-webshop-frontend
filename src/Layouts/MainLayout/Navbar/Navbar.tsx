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
import { forwardRef, Fragment, useEffect, useState } from "react";
import {
  AntTab,
  AntTabs,
  appBarStyles,
  menuIconStyles,
  ShopMenuWrapper,
  tabLinkStyles,
} from "../../../Styles/Appbar";
import TabDrawer from "./TabDrawer/TabDrawer";
import ShopDrawer from "./ShopDrawer/ShopDrawer";
import SearchBar from "./SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import ShopMenu from "./ShopMenu/ShopMenu";
import {
  CompareModal,
  Login,
  Register,
  ResetPassword,
} from "../../../Components";
import Icons from "./Icons/Icons";

function Navbar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openCompareModal, setOpenCompareModal] = useState(false);

  const [collapse, setCollapse] = useState(true);
  const [modalType, setModalType] = useState("login");

  const [displayDrawer, setDisplayDrawer] = useState({
    left: false,
    right: false,
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { pathname } = useLocation();
  const userPath = pathname.includes("user");
  const tabRoutes = ["/", "/shop", "/blog", "/contact-us", "/about-us"];
  let tabValue = tabRoutes.find((v) => v === pathname);

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
      if (window.scrollY > 180 && lastScroll < window.scrollY && matches) {
        setCollapse(false);
        setOpenDropdown(false);
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
      <AppBar sx={appBarStyles}>
        <Collapse in={userPath ? true : collapse} timeout={600}>
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
                  {matches && (
                    <AntTabs value={tabValue ? tabValue : false}>
                      {navbarItems.map((item) => (
                        <AntTab
                          key={item.id}
                          label={item.name}
                          component={forwardRef((props, ref) => (
                            <Box
                              sx={{
                                padding: "0 !important",
                                "&:hover ": {
                                  zIndex: 99,
                                  a: {
                                    color:
                                      tabValue === item.route
                                        ? ""
                                        : "common.digitaRed",
                                  },
                                  "& .shop-menu": {
                                    display:
                                      item.name === "shop" ? "block" : "none",
                                  },
                                },
                                overflow: "visible !important",
                              }}
                              {...props}
                              ref={ref}
                            >
                              <Box
                                component={Link}
                                to={item.route}
                                sx={tabLinkStyles}
                              >
                                <Box>{item.name}</Box>
                                {item.name === "shop" && <KeyboardArrowDown />}
                              </Box>
                              {item.name === "shop" && (
                                <ShopMenuWrapper className={"shop-menu"}>
                                  <ShopMenu />
                                </ShopMenuWrapper>
                              )}
                            </Box>
                          ))}
                          value={item.route}
                        />
                      ))}
                    </AntTabs>
                  )}
                  <Icons
                    openSearchBarHandler={openSearchBarHandler}
                    loginModalHandler={loginModalHandler}
                    matches={matches}
                    toggleDrawer={toggleDrawer}
                    setOpenCompareModal={setOpenCompareModal}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
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
        </Collapse>
      </AppBar>
      <Box sx={{ marginTop: { xs: "56px", sm: "64px", md: "90px" } }}></Box>
      <Modal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div>
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
        </div>
      </Modal>
      <Modal
        open={openCompareModal}
        onClose={() => setOpenCompareModal(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div>
          <CompareModal setOpenCompareModal={setOpenCompareModal} />
        </div>
      </Modal>
    </Fragment>
  );
}

export default Navbar;
