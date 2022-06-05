import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Badge,
  useMediaQuery,
} from "@mui/material";
import logoImg from "../../Assets/Images/digita-logo.png";
import { navbarItems } from "../../Assets/Data/Data";
import { useTheme } from "@mui/material/styles";

import {
  LocalGroceryStoreOutlined,
  SearchOutlined,
  LoginOutlined,
  FavoriteBorderOutlined,
  MenuRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { AntTab, AntTabs } from "../../Styles/Appbar";
import TabDrawer from "./TabDrawer/TabDrawer";
import ShopDrawer from "./ShopDrawer/ShopDrawer";
import ShopMenuCard from "./ShopMenuCard/ShopMenuCard";

const navbarIcons = {
  marginLeft: "12px",
  transition: "all 200ms",
  cursor: "pointer",
  fontSize: "28px",
  "&:hover": { color: "#f03637" },
};
function Navbar() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [displayMenu, setDisplayMenu] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [displayDrawer, setDisplayDrawer] = useState({
    left: false,
    right: false,
  });
  type Anchor = "left" | "right";

  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    setDisplayDrawer({ ...displayDrawer, [anchor]: open });
  };

  const displayMenuHandler = (display: boolean) => {
    if (matches) {
      setDisplayMenu(display);
    }
  };
  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth={"xl"}
        sx={{
          position: "relative",
        }}
        onMouseEnter={() => displayMenuHandler(false)}
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
          <AntTabs
            value={selectedTab}
            onChange={(event, newValue) => setSelectedTab(newValue)}
          >
            {navbarItems.map((item) => (
              <AntTab key={item.id} label={item.name} sx={{ height: "90px" }} />
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
            <Box
              display={"flex"}
              height={"100%"}
              onMouseEnter={() => displayMenuHandler(false)}
            >
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
                <FavoriteBorderOutlined color="primary" sx={navbarIcons} />
              </Badge>
            </Box>
            <Box
              onMouseEnter={() => displayMenuHandler(true)}
              onClick={() => toggleDrawer("right", true)}
            >
              <Badge
                badgeContent={4}
                overlap="circular"
                color="error"
                sx={{ margin: "auto" }}
              >
                <LocalGroceryStoreOutlined
                  color="primary"
                  sx={{
                    marginLeft: "12px",
                    transition: "all 200ms",
                    cursor: "pointer",
                    fontSize: "28px",
                    "&:hover": { color: "#f03637" },
                  }}
                />
              </Badge>
            </Box>
            <ShopDrawer
              displayDrawer={displayDrawer}
              toggleDrawer={toggleDrawer}
            />
          </Box>
        </Toolbar>
        <ShopMenuCard
          displayMenu={displayMenu}
          displayMenuHandler={displayMenuHandler}
        />
      </Container>
    </AppBar>
  );
}

export default Navbar;
