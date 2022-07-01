import { Home } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { PanelItem } from "../../../Styles/Panel";
import SidebarTop from "./SidebarTop/SidebarTop";
function Sidebar() {
  return (
    <>
      <SidebarTop />
      <List>
        <PanelItem>
          <NavLink to="/panel/dashboard">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
              primary="dashboard"
            />
          </NavLink>
        </PanelItem>
      </List>
    </>
  );
}

export default Sidebar;
