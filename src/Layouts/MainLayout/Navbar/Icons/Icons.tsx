import {
  ArrowDropDown,
  CompareArrows,
  LocalGroceryStoreOutlined,
  PersonOutline,
  SearchOutlined,
} from "@mui/icons-material";
import { Badge, Box } from "@mui/material";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  iconsBadgeStyles,
  iconsWrapperStyles,
  IconWrapper,
} from "../../../../Styles/Appbar";
import ShopCart from "../ShopCart/ShopCart";
import UserDropDown from "../UserDropDown/UserDropDown";

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
  const [open, setOpen] = useState(false);
  const userDropRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      userDropRef.current &&
      userDropRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  const navigate = useNavigate();

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
        <IconWrapper
          ref={userDropRef}
          id="user-drop-button"
          aria-controls={open ? "user-drop-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Badge showZero sx={iconsBadgeStyles}>
            <PersonOutline color="primary" sx={navbarIcons} />
            <ArrowDropDown
              color="primary"
              sx={{
                transition: "all 200ms",
                cursor: "pointer",
                fontSize: "28px",
                "&:hover": { color: "#f03637" },
              }}
            />
          </Badge>
        </IconWrapper>
        <UserDropDown
          open={open}
          handleClose={handleClose}
          userDropRef={userDropRef}
        />
        {/* <IconWrapper onClick={loginModalHandler(true)}>
          <Badge showZero sx={iconsBadgeStyles}>
            <LoginOutlined color="primary" sx={navbarIcons} />
          </Badge>
        </IconWrapper> */}

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
          </Box>
          <ShopCart />
        </IconWrapper>
      </Box>
    </>
  );
}

export default Icons;
