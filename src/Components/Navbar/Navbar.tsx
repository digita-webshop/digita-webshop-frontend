import {
  AppBar,
  Box,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Badge,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  InputBase,
  ImageListItem,
  Menu,
  MenuItem,
  Button,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import logoImg from "../../Assets/Images/digita-logo.png";
import { navbarItems } from "../../Assets/Data/Data";
import { styled, useTheme } from "@mui/material/styles";
import {
  LocalGroceryStoreOutlined,
  SearchOutlined,
  LoginOutlined,
  FavoriteBorderOutlined,
  MenuRounded,
  CloseRounded,
} from "@mui/icons-material";
import { Fragment, useState } from "react";

interface StyledTabProps {
  label: string;
}
const AntTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "#f03637",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "capitalize",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: 15,
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.85)",
  borderBottom: "3px solid white",

  "&:hover": {
    color: "#f03637",
    borderBottom: "3px solid #f03637",
  },
  "&.Mui-selected": {
    color: "#333333",
  },
}));

const navbarIcons = {
  marginLeft: "12px",
  transition: "all 200ms",
  cursor: "pointer",
  fontSize: "28px",
  "&:hover": { color: "#f03637" },
};
function Navbar() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  console.log(matches);
  const handleClick = () => {
    if (matches) {
      setDisplayMenu(true);
    }
  };
  const handleClose = () => {
    if (matches) {
      setDisplayMenu(false);
    }
  };
  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth={"xl"}
        sx={{ position: "relative" }}
        onMouseEnter={handleClose}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
          disableGutters
        >
          <Box>
            <Box
              onClick={() =>
                setDisplayDrawer((prevDisplayDrawer) => !prevDisplayDrawer)
              }
            >
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
            <Drawer
              open={displayDrawer}
              onClose={() => setDisplayDrawer(false)}
            >
              <Box
                sx={{
                  backgroundColor: "#f03637",
                  display: "flex",
                  alignItems: "center",
                }}
                paddingY={2}
              >
                <Typography
                  color={"white"}
                  variant="body2"
                  sx={{
                    textTransform: "uppercase ",
                    marginLeft: "15px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <CloseRounded sx={{ color: "white" }} />
                  Quick Navigation
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "90%",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#EAEAEA",
                  margin: "25px auto",
                }}
              >
                <InputBase
                  placeholder="Search"
                  sx={{
                    width: "100%",
                    padding: "6px",
                    borderRadius: "3px",
                  }}
                />
                <SearchOutlined
                  sx={{
                    cursor: "pointer",
                    marginRight: "4px",
                  }}
                />
              </Box>
              <List>
                {navbarItems.map((item) => (
                  <Fragment key={item.id}>
                    <ListItem>
                      <ListItemText
                        primary={item.name}
                        sx={{
                          width: { xs: "200px", sm: "300px" },
                          cursor: "pointer",
                          textTransform: "capitalize",
                          "&:hover": { color: "#f03637" },
                        }}
                      />
                    </ListItem>
                    <Divider sx={{ borderColor: "rgba(0,0,0,0.08)" }} />
                  </Fragment>
                ))}
              </List>
            </Drawer>
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
            <Box display={"flex"} height={"100%"} onMouseEnter={handleClose}>
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
            <Box onMouseEnter={handleClick}>
              <Badge
                badgeContent={4}
                overlap="circular"
                color="error"
                sx={{ margin: "auto  " }}
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
          </Box>
        </Toolbar>
        <Box
          display={`${displayMenu ? "inline-block" : "none"}`}
          sx={{
            position: "absolute",
            right: "10px",
            top: "72px ",
            padding: "15px",
          }}
          onMouseLeave={handleClose}
        >
          <List sx={{ maxHeight: "360px", overflow: "auto" }}>
            <ListItem disableGutters>
              <img
                src="https://demo-61.woovinapro.com/wp-content/uploads/2018/09/product-16-330x330.jpg"
                alt="product"
                width={75}
                height={75}
              />
              <ListItemText sx={{ marginLeft: "16px", marginRight: "40px" }}>
                <Typography variant="body2" color={"primary"}>
                  Samsung Galaxy V21
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Typography variant="subtitle1" color={"secondary"}>
                    1 x{" "}
                  </Typography>
                  <Typography variant="body2" color={"primary"}>
                    $75.00{" "}
                  </Typography>
                </Box>
              </ListItemText>
              <ListItemIcon>
                <Box>
                  <CloseRounded
                    sx={{
                      border: "1px solid black",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      padding: "3px",
                      "&:hover": {
                        border: "1px solid red",
                        color: "red",
                      },
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </ListItemIcon>
            </ListItem>
            <Divider />
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "13px",
            }}
          >
            <Typography
              variant="subtitle2"
              color={"secondary"}
              fontWeight={400}
            >
              SUBTOTAL:
            </Typography>
            <Typography variant="subtitle2" color={"primary"}>
              $325:00
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              paddingY: "20px",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Button
              variant="contained"
              fullWidth={true}
              color="error"
              sx={{
                "&:hover": { backgroundColor: "#333333" },
              }}
            >
              VIEW CARD
            </Button>
            <Button variant="contained" fullWidth={true}>
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
