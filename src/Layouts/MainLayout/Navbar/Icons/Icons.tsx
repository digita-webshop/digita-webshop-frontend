import {
  CompareArrows,
  LocalGroceryStoreOutlined,
  LoginOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Badge, Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import {
  iconsBadgeStyles,
  iconsWrapperStyles,
  IconWrapper,
} from "../../../../Styles/Appbar";
import ShopCart from "../ShopCart/ShopCart";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

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
  setOpenCompareModal: Dispatch<SetStateAction<boolean>>;
}
function Icons({
  openSearchBarHandler,
  loginModalHandler,
  toggleDrawer,
  matches,
  setOpenCompareModal,
}: Props) {
  const navigate = useNavigate();
  const cartList = useSelector((state:RootState) => state.cartReducer.cartList);

  const shopClickHandler = () => {
    if (!matches) {
      toggleDrawer("right", true)();
    } else {
      navigate("/cart");
    }
  };
  return (
    <>
      <Box sx={iconsWrapperStyles}>
        <IconWrapper onClick={openSearchBarHandler}>
          <Badge showZero sx={iconsBadgeStyles}>
            <SearchOutlined color="primary" sx={navbarIcons} />
          </Badge>
        </IconWrapper>
        <IconWrapper onClick={loginModalHandler(true)}>
          <Badge showZero sx={iconsBadgeStyles}>
            <LoginOutlined color="primary" sx={navbarIcons} />
          </Badge>
        </IconWrapper>
        <IconWrapper
          display={"flex"}
          height={"100%"}
          onClick={() => setOpenCompareModal(true)}
        >
          <Badge showZero sx={iconsBadgeStyles}>
            <CompareArrows color="primary" sx={navbarIcons} />
          </Badge>
        </IconWrapper>
        <IconWrapper
          sx={{
            "&:hover .shop-cart": {
              display: matches ? "inline-block" : "none",
            },
          }}
        >
          <Box onClick={shopClickHandler} sx={{ display: "flex" }}>
            <Badge
              badgeContent={cartList.length}
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
          </Box>
          <ShopCart />
        </IconWrapper>
      </Box>
    </>
  );
}

export default Icons;
