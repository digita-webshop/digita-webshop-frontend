import {
  Box,
  Divider,
  Icon,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { UserItem } from "../../../Styles/User";
import { userSidebarItems } from "../../../Services/Utils/Data/data";
import SidebarTop from "./SidebarTop/SidebarTop";
import MyOrders from "../../../Components/User/Status/MyOrders/MyOrders";

const Sidebar = () => {
  return (
    <>
      <SidebarTop />
      <Divider sx={{ borderColor: "common.panelBorderGrey" }} />

      <MyOrders sidebar={true} />
      <Divider
        sx={{ borderColor: "common.panelBorderGrey", display: { md: "none" } }}
      />
      <List>
        {userSidebarItems.map(({ id, title, route, icon }) => (
          <Fragment key={id}>
            {title === "settings" && <Divider sx={{ marginY: "10px" }} />}
            <UserItem className={title === "Status" ? "hidden" : ""}>
              <NavLink to={route} className={`link`}>
                <ListItemIcon>
                  <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText
                  // sx={{ display: menuOpen ? "" : "none" }}
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
        ))}
      </List>
    </>
  );
};

export default Sidebar;
