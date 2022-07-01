import { Outlet } from "react-router-dom";
import { Aside, Main } from "../../Styles/Panel";
import Sidebar from "./Sidebar/Sidebar";

function PanelLayout() {
  return (
    <>
      <Aside>
        <Sidebar />
      </Aside>
      <Main>
        <div></div>
        <Outlet />
      </Main>
    </>
  );
}

export default PanelLayout;
