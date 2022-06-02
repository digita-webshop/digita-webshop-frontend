import { AppBar, Box, Container, Tab, Tabs, Toolbar } from "@mui/material";
import logoImg from "../../Assets/Images/digita-logo.png";
import { navbarItems } from "../../Assets/Data/Data";
import { styled } from "@mui/material/styles";
import {
  LocalGroceryStoreOutlined,
  SearchOutlined,
  LoginOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

interface StyledTabProps {
  label: string;
}
const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#f03637",
  },
});

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

function Navbar() {
  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Container maxWidth={"xl"}>
        <Toolbar>
          <Box marginRight={5}>
            <img src={logoImg} alt="digita-logo" />
          </Box>
          <AntTabs value={2}>
            {navbarItems.map((item) => (
              <AntTab label={item.name} sx={{ height: "90px" }} />
            ))}
          </AntTabs>
          <Box marginLeft={"auto"}>
            <SearchOutlined color="primary" fontSize={"large"} />
            <LoginOutlined
              color="primary"
              sx={{ marginLeft: "6px" }}
              fontSize={"large"}
            />
            <FavoriteBorderOutlined
              color="primary"
              sx={{ marginLeft: "6px" }}
              fontSize={"large"}
            />
            <LocalGroceryStoreOutlined
              color="primary"
              sx={{ marginLeft: "6px" }}
              fontSize={"large"}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
