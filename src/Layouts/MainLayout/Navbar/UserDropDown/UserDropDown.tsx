import {
  ChevronRight,
  FavoriteBorder,
  Logout,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import { MutableRefObject, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../../features/auth/authSlice";
import { IUser } from "../../../../Services/Types/user";
import { DropMenuItem } from "../../../../Styles/Appbar";

interface Props {
  openDropdown: boolean;
  handleClose: (event: Event | SyntheticEvent) => void;
  userDropRef: MutableRefObject<HTMLDivElement | null>;
  user: IUser | null;
  role: string | null;
}
function UserDropDown({
  openDropdown,
  handleClose,
  userDropRef,
  user,
  role,
}: Props) {
  const dispatch = useDispatch();
  const isAdmin = role === "admin";
  const logoutClickHandler = (event: Event | SyntheticEvent) => {
    handleClose(event);
    dispatch(logout());
  };
  return (
    <Popper
      open={openDropdown}
      anchorEl={userDropRef?.current}
      role={undefined}
      placement="bottom-end"
      transition
      disablePortal
      sx={{
        boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)",
        minWidth: "200px",
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: "right top",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={openDropdown}
                id="composition-menu"
                aria-labelledby="composition-button"
                disablePadding
              >
                <DropMenuItem
                  sx={{
                    img: { width: "25px", borderRadius: "50%" },
                  }}
                  onClick={handleClose}
                >
                  <Link to={isAdmin ? "/panel/dashboard" : "/user/status"}>
                    <img
                      src={
                        user?.image ||
                        "data:image/png;base64,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"
                      }
                      alt="avatar"
                    />
                    <Typography>{user?.userName}</Typography>
                    <ChevronRight sx={{ marginLeft: "auto" }} />
                  </Link>
                </DropMenuItem>
                <DropMenuItem onClick={handleClose}>
                  <Link to={isAdmin ? "/panel/my-orders" : "/user/orders"}>
                    <ShoppingBagOutlined />
                    <Typography>Orders</Typography>
                  </Link>
                </DropMenuItem>
                <DropMenuItem onClick={handleClose}>
                  <Link to={isAdmin ? "/panel/wishlist" : "/user/wishlist"}>
                    <FavoriteBorder />
                    <Typography>Wishlist</Typography>
                  </Link>
                </DropMenuItem>
                <DropMenuItem onClick={logoutClickHandler}>
                  <Link to="/">
                    <Logout />
                    <Typography>Logout</Typography>
                  </Link>
                </DropMenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export default UserDropDown;
