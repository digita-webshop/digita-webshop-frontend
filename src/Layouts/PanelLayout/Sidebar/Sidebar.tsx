import { Divider, Icon, List, ListItemIcon, ListItemText } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { panelSidebarItems } from "../../../Services/Utils/Data/data";
import { PanelItem } from "../../../Styles/Panel";
import SidebarTop from "./SidebarTop/SidebarTop";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}
function Sidebar({ menuOpen, setMenuOpen }: Props) {
  return (
    <>
      <SidebarTop menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <List>
        {panelSidebarItems.map(({ id, title, route, icon }) => (
          <>
            {title === "settings" && <Divider sx={{ marginY: "10px" }} />}
            <PanelItem key={id}>
              <NavLink to={route} className={menuOpen ? "" : "menu"}>
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
          </>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
