import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Aside, Main } from "../../Styles/Panel";
import Sidebar from "./Sidebar/Sidebar";

function PanelLayout() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <Aside className={menuOpen ? "" : "menu"}>
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Aside>
      <Main>
        <div></div>
        <Outlet />
      </Main>
    </>
  );
}

export default PanelLayout;
