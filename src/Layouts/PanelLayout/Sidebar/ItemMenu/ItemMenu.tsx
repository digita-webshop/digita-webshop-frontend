import {
  Box,
  ClickAwayListener,
  Grow,
  Icon,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { Dispatch, SetStateAction, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { PanelItem } from "../../../../Styles/Panel";

interface I {
  id: string;
  name: string;
  route: string;
}

interface Props {
  title: string;
  icon: string;
  data: I[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<{ products: boolean; articles: boolean }>>;
}
function ItemMenu({ title, icon, data, open, setOpen }: Props) {
  const { pathname } = useLocation();
  const anchorRef = useRef<HTMLLIElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => ({ ...prevOpen, [title]: !open }));
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen((prevOpen) => ({ ...prevOpen, [title]: false }));
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen((prevOpen) => ({ ...prevOpen, [title]: false }));
    } else if (event.key === "Escape") {
      setOpen((prevOpen) => ({ ...prevOpen, [title]: false }));
    }
  }
  return (
    <div>
      <PanelItem
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={() => handleToggle()}
      >
        <Box
          className={`link ${pathname.includes(title) && "active"}`}
          sx={{ width: "50% !important" }}
        >
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
        </Box>
      </PanelItem>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="right-start"
        transition
        disablePortal
        sx={{ boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left bottom" : "left top",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {data.map((item) => (
                    <MenuItem
                      key={item.id}
                      onClick={handleClose}
                      sx={{
                        a: {
                          textDecoration: "none",
                          color: "common.digitaGrey1",
                          transition: "all 200ms",
                          "&:hover": { color: "common.digitaBlack" },
                        },
                      }}
                    >
                      <Link to={item.route}>{item.name}</Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default ItemMenu;
