import { Dispatch, Fragment, SetStateAction } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = () => {
  const { pathname } = useLocation();
  const settingsPath = pathname.split("/")[2];
  return <div>Sidebar</div>;
};

export default Sidebar;
