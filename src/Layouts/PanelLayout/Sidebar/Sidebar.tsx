import { Divider, Icon, List, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import { panelSidebarItems } from "../../../Services/Utils/Data/data";
import { PanelItem } from "../../../Styles/Panel";
import SidebarTop from "./SidebarTop/SidebarTop";

function Sidebar() {
  return (
    <>
      <SidebarTop />
      <List>
        {panelSidebarItems.map(({ id, title, route, icon }) => (
          <>
            {title === "settings" && <Divider sx={{ marginY: "10px" }} />}
            <PanelItem key={id}>
              <NavLink to={route}>
                <ListItemIcon>
                  <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText
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
