import {
  FavoriteBorderOutlined,
  LocalGroceryStoreOutlined,
  LoginOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Badge, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconWrapper } from "../../../../Styles/Appbar";
import ShopCart from "../ShopCart/ShopCart";

const navbarIcons = {
  marginLeft: "12px",
  transition: "all 200ms",
  cursor: "pointer",
  fontSize: "28px",
  "&:hover": { color: "#f03637" },
};
type Anchor = "left" | "right";

interface Props {
  openSearchBarHandler: () => void;
  loginModalHandler: (open: boolean) => () => void;
  toggleDrawer: (anchor: Anchor, open: boolean) => () => void;
  matches: boolean;
}
function Icons({
  openSearchBarHandler,
  loginModalHandler,
  toggleDrawer,
  matches,
}: Props) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          marginLeft: { sx: "0", md: "auto" },
          height: { md: "90px" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconWrapper onClick={openSearchBarHandler}>
          <Badge
            showZero
            sx={{
              margin: "auto",
              display: {
                xs: "none",
                md: "inline-flex",
              },
            }}
          >
            <SearchOutlined color="primary" sx={navbarIcons} />
          </Badge>
        </IconWrapper>
        <IconWrapper onClick={loginModalHandler(true)}>
          <Badge
            showZero
            sx={{
              margin: "auto",

              display: {
                xs: "none",
                md: "inline-flex",
              },
            }}
          >
            <LoginOutlined color="primary" sx={navbarIcons} />
          </Badge>
        </IconWrapper>
        <IconWrapper
          display={"flex"}
          height={"100%"}
          onClick={() => navigate("/wishlist")}
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
        </IconWrapper>
        <IconWrapper
          onClick={toggleDrawer("right", true)}
          sx={{
            "&:hover .shop-cart": {
              display: matches ? "inline-block" : "none",
            },
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
          <ShopCart />
        </IconWrapper>
      </Box>
    </>
  );
}

export default Icons;
