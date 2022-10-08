import { Divider, Icon, List, ListItemIcon, ListItemText } from "@mui/material";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { panelSidebarItems } from "../../../data/data";
import { useAppSelector } from "../../../redux/store";
import { PanelItem } from "../styles";
import ItemAccordion from "./ItemAccordion/ItemAccordion";
import ItemMenu from "./ItemMenu/ItemMenu";
import SidebarTop from "./SidebarTop/SidebarTop";

const products = [
  { id: "1", name: "product list", route: "/panel/products/list" },
  { id: "2", name: "add product", route: "/panel/products/add" },
  { id: "3", name: "product reviews", route: "/panel/products/reviews" },
];
const articles = [
  { id: "1", name: "article list", route: "/panel/articles/list" },
  { id: "2", name: "add article", route: "/panel/articles/add" },
  { id: "3", name: "article reviews", route: "/panel/articles/reviews" },
];

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}
function Sidebar({ menuOpen, setMenuOpen, setDrawerOpen }: Props) {
  const { role } = useAppSelector((state) => state.reducer.auth);
  const [open, setOpen] = useState({ products: false, articles: false });

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
        {panelSidebarItems
          .filter((item) =>
            role === "superAdmin" ? item.title : item.title !== "manage access"
          )
          .map(({ id, title, route, icon }) => {
            const settingsActive =
              settingsPath === "settings" && title === "settings" && "active";

            if (title === "products" || title === "articles") {
              const data = title === "products" ? products : articles;
              return menuOpen ? (
                <ItemAccordion
                  key={id}
                  title={title}
                  icon={icon}
                  data={data}
                  menuOpen={menuOpen}
                  setDrawerOpen={setDrawerOpen}
                />
              ) : (
                <ItemMenu
                  key={id}
                  title={title}
                  icon={icon}
                  data={data}
                  open={open[title]}
                  setOpen={setOpen}
                />
              );
            }
            return (
              <Fragment key={id}>
                {title === "my wishlist" && (
                  <Divider sx={{ marginY: "10px" }} />
                )}
                <PanelItem>
                  <NavLink
                    to={route}
                    className={`${settingsActive} ${!menuOpen && "menu"} link`}
                    onClick={() => setDrawerOpen(false)}
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
                {title === "my orders" && <Divider sx={{ marginY: "10px" }} />}
              </Fragment>
            );
          })}
      </List>
    </>
  );
}

export default Sidebar;
