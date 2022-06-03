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
} from "@mui/material";
import logoImg from "../../Assets/Images/digita-logo.png";
import { navbarItems } from "../../Assets/Data/Data";
import { styled } from "@mui/material/styles";
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
  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Container maxWidth={"xl"}>
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
                  <Fragment>
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
              <AntTab label={item.name} sx={{ height: "90px" }} />
            ))}
          </AntTabs>
          <Box marginLeft={"auto"} sx={{ marginLeft: { sx: "0", md: "auto" } }}>
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
            <Badge
              badgeContent={4}
              overlap="circular"
              color="error"
              sx={{
                display: {
                  xs: "none",
                  md: "inline-flex",
                },
              }}
            >
              <FavoriteBorderOutlined color="primary" sx={navbarIcons} />
            </Badge>
            <Badge badgeContent={4} overlap="circular" color="error">
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
