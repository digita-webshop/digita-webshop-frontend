import {
  AppBar,
  Box,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Badge,
} from "@mui/material";
import logoImg from "../../Assets/Images/digita-logo.png";
import { navbarItems } from "../../Assets/Data/Data";
import { styled } from "@mui/material/styles";
import {
  LocalGroceryStoreOutlined,
  SearchOutlined,
  LoginOutlined,
  FavoriteBorderOutlined,
  Menu,
  MenuRounded,
} from "@mui/icons-material";
import { useState } from "react";
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
            <MenuRounded
              fontSize={"large"}
              color="primary"
              sx={{ display: { sx: "block", md: "none" } }}
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
