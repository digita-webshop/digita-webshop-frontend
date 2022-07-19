import { Divider, Icon, List, ListItemIcon, ListItemText } from "@mui/material";
import { Dispatch, Fragment, SetStateAction } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserItem } from "../../../Styles/User";
import { userSidebarItems } from "../../../Services/Utils/Data/data";
import SidebarTop from "./SidebarTop/SidebarTop";

interface T {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ menuOpen, setMenuOpen, setDrawerOpen }: T) => {
  const { pathname } = useLocation();
  const settingsPath = pathname.split("/")[2];
  return (
    <>
      <SidebarTop />
      <List>
        {userSidebarItems.map(({ id, title, route, icon }) => {
          const settingsActive =
            settingsPath === "settings" && title === "settings" && "active";

          return (
            <Fragment key={id}>
              {title === "settings" && <Divider sx={{ marginY: "10px" }} />}
              <UserItem>
                <NavLink
                  to={route}
                  className={`${settingsActive} ${!menuOpen && "menu"} link`}
                >
                  <ListItemIcon>
                    <Icon>{icon}</Icon>
                  </ListItemIcon>
                  <ListItemText
                    sx={{ display: menuOpen ? "" : "none" }}
                    primaryTypographyProps={{
                      fontSize: "16px",
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                    primary={title}
                  />
                </NavLink>
              </UserItem>
            </Fragment>
          );
        })}
      </List>
    </>
  );
};

export default Sidebar;
