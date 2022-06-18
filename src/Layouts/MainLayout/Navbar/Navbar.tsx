import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Badge,
  useMediaQuery,
  Fade,
  SelectChangeEvent,
  Collapse,
} from "@mui/material";
import logoImg from "../../../Assets/Images/digita-logo.png";
import { navbarItems } from "../../../Services/Utils/Data/data";
import { useTheme } from "@mui/material/styles";

import {
  LocalGroceryStoreOutlined,
  SearchOutlined,
  LoginOutlined,
  FavoriteBorderOutlined,
  MenuRounded,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Fragment, useEffect, useState } from "react";
import { AntTab, AntTabs } from "../../../Styles/Appbar";
import TabDrawer from "./TabDrawer/TabDrawer";
import ShopDrawer from "./ShopDrawer/ShopDrawer";
import ShopMenuCard from "./ShopCart/ShopCart";
import SearchBar from "./SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import ShopMenu from "./ShopMenu/ShopMenu";

const navbarIcons = {
  marginLeft: "12px",
  transition: "all 200ms",
  cursor: "pointer",
  fontSize: "28px",
  "&:hover": { color: "#f03637" },
};
function Navbar() {
  const [displayShopMenu, setDisplayShopMenu] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [collapse, setCollapse] = useState(true);

  const [displayDrawer, setDisplayDrawer] = useState({
    left: false,
    right: false,
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { pathname } = useLocation();

  const selectedCategoryHandler = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };

  type Anchor = "left" | "right";

  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    if (!matches) {
      setDisplayDrawer({ ...displayDrawer, [anchor]: open });
    }
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
          <Container
            maxWidth={"xl"}
            sx={{
              position: "relative",
            }}
          >
            <Toolbar
              sx={{
                justifyContent: "space-between",
              }}
              disableGutters
            >
              <Box>
                <Box onClick={() => toggleDrawer("left", true)}>
                  <MenuRounded
                    fontSize={"large"}
                    color="primary"
                    sx={{
                      display: {
                        sx: "block",
                        md: "none",
                        cursor: "pointer",
                        "&:hover": { color: "#f03637" },
                      },
                    }}
                  />
                </Box>
                <TabDrawer
                  displayDrawer={displayDrawer}
                  toggleDrawer={toggleDrawer}
                />
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
                  <Box
                    sx={{
                      marginLeft: { sx: "0", md: "auto" },
                      height: { md: "90px" },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box onClick={openSearchBarHandler}>
                      <Badge
                        showZero
                        sx={{
                          display: {
                            xs: "none",
                            md: "inline-flex",
                          },
                        }}
                      >
                        <SearchOutlined color="primary" sx={navbarIcons} />
                      </Badge>
                    </Box>
                    <Badge
                      showZero
                      sx={{
                        display: {
                          xs: "none",
                          md: "inline-flex",
                        },
                      }}
                    >
                      <LoginOutlined color="primary" sx={navbarIcons} />
                    </Badge>
                    <Box display={"flex"} height={"100%"}>
                      <Badge
                        badgeContent={4}
                        overlap="circular"
                        color="error"
                        sx={{
                          display: {
                            xs: "none",
                            md: "inline-flex",
                          },
                          margin: "auto",
                        }}
                      >
                        <FavoriteBorderOutlined
                          color="primary"
                          sx={navbarIcons}
                        />
                      </Badge>
                    </Box>
                    <Box
                      onClick={() => toggleDrawer("right", true)}
                      sx={{
                        height: "100%",
                        display: "flex",
                        cursor: "pointer",
                        "&:hover .shop-cart": {
                          display: matches ? "inline-block" : "none",
                        },
                        "&:hover .local-grocery-icon": { color: "#f03637" },
                      }}
                    >
                      <Badge
                        badgeContent={4}
                        overlap="circular"
                        color="error"
                        sx={{
                          margin: "auto",
                        }}
                      >
                        <LocalGroceryStoreOutlined
                          color="primary"
                          sx={{
                            marginLeft: "12px",
                            transition: "all 200ms",
                            cursor: "pointer",
                            fontSize: "28px",
                          }}
                          className="local-grocery-icon"
                        />
                      </Badge>
                      <ShopMenuCard />
                    </Box>
                    <ShopDrawer
                      displayDrawer={displayDrawer}
                      toggleDrawer={toggleDrawer}
                    />
                  </Box>
                </Fragment>
              )}
              <Fade
                style={{ display: openSearchBar ? "block" : "none" }}
                in={openSearchBar}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <SearchBar
                    selectedCategory={selectedCategory}
                    selectedCategoryHandler={selectedCategoryHandler}
                    openSearchBarHandler={openSearchBarHandler}
                  />
                </Box>
              </Fade>
            </Toolbar>
          </Container>
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
    </Fragment>
  );
}

export default Navbar;
