import { Divider, Icon, List, ListItemIcon, ListItemText } from "@mui/material";
import { Dispatch, Fragment, SetStateAction } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { panelSidebarItems } from "../../../Services/Utils/Data/data";
import { PanelItem } from "../../../Styles/Panel";
import SidebarTop from "./SidebarTop/SidebarTop";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}
function Sidebar({ menuOpen, setMenuOpen, setDrawerOpen }: Props) {
  const { pathname } = useLocation();
  const settingsPath = pathname.split("/")[2];

  return (
    <>
      <SidebarTop
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setDrawerOpen={setDrawerOpen}
      />
      <List>
        {panelSidebarItems.map(({ id, title, route, icon }) => {
          const settingsActive =
            settingsPath === "settings" && title === "settings" && "active";

          return (
            <Fragment key={id}>
              {title === "settings" && <Divider sx={{ marginY: "10px" }} />}
              <PanelItem>
                <NavLink
                  to={route}
                  className={`${settingsActive} ${!menuOpen && "menu"}`}
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
              </PanelItem>
            </Fragment>
          );
        })}
      </List>
    </>
  );
}

export default Sidebar;
