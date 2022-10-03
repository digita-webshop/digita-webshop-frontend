import {
  ArrowDropDown,
  CompareArrows,
  LocalGroceryStoreOutlined,
  LoginOutlined,
  PersonOutline,
  SearchOutlined,
} from "@mui/icons-material";
import { Badge, Box, Skeleton } from "@mui/material";
import { Dispatch, Fragment, SetStateAction, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  iconsBadgeStyles,
  iconsWrapperStyles,
  IconWrapper,
} from "../../../../Styles/Appbar";
import ShopCart from "../ShopCart/ShopCart";
import UserDropDown from "../UserDropDown/UserDropDown";
import { useAppSelector } from "../../../../features/store";
import { useGetAllCartItemQuery } from "../../../../features/cart/cartApi";

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
  openDropdown: boolean;
  setOpenDropdown: Dispatch<SetStateAction<boolean>>;
}
function Icons({
  openSearchBarHandler,
  loginModalHandler,
  toggleDrawer,
  matches,
  setOpenCompareModal,
  openDropdown,
  setOpenDropdown,
}: Props) {
  const userDropRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { user, role } = useAppSelector((state) => state.reducer.auth);
  const { cartList } = useAppSelector((state) => state.reducer.cart);

  const { data: cartData } = useGetAllCartItemQuery();
  const cart = cartData?.data.products ?? [];

  const cartItems = user ? cart : cartList;
  console.log(cartItems.length);

  const handleToggle = () => {
    if (matches) {
      setOpenDropdown((prevOpen) => !prevOpen);
    } else if (role === "admin" || role === "superAdmin") {
      navigate("/panel/dashboard");
    } else {
      navigate("/user");
    }
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      userDropRef.current &&
      userDropRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenDropdown(false);
  };

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
        {user && role ? (
          <Fragment>
            <IconWrapper
              ref={userDropRef}
              id="user-drop-button"
              aria-controls={openDropdown ? "user-drop-menu" : undefined}
              aria-expanded={openDropdown ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Badge showZero sx={{ margin: "auto" }}>
                <PersonOutline color="primary" sx={navbarIcons} />
                <ArrowDropDown
                  color="primary"
                  sx={{
                    transition: "all 200ms",
                    cursor: "pointer",
                    fontSize: "28px",
                    "&:hover": { color: "#f03637" },
                    display: { xs: "none", md: "inline-block" },
                  }}
                />
              </Badge>
            </IconWrapper>
            <UserDropDown
              openDropdown={openDropdown}
              handleClose={handleClose}
              userDropRef={userDropRef}
              user={user}
              role={role}
            />
          </Fragment>
        ) : (
          <IconWrapper onClick={loginModalHandler(true)}>
            <Badge showZero sx={iconsBadgeStyles}>
              {/* <Skeleton>
                  <LoginOutlined
                    color="primary"
                    sx={{ ...navbarIcons, padding: "10px 8px" }}
                  />
                </Skeleton> */}
              <LoginOutlined color="primary" sx={navbarIcons} />
            </Badge>
          </IconWrapper>
        )}

        {/* <IconWrapper
          display={"flex"}
          height={"100%"}
          onClick={() => setOpenCompareModal(true)}
        >
          <Badge showZero sx={iconsBadgeStyles}>
            <CompareArrows color="primary" sx={navbarIcons} />
          </Badge>
        </IconWrapper> */}
        <IconWrapper
          sx={{
            "&:hover .shop-cart": {
              display:
                matches && cartItems.length !== 0 ? "inline-block" : "none",
            },
          }}
        >
          <Box onClick={shopClickHandler} sx={{ display: "flex" }}>
            <Badge
              badgeContent={cartItems.length}
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
