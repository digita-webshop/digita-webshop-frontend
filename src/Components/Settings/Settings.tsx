import { Grid } from "@mui/material";
import { useState } from "react";
import { DashWrapper } from "../../Styles/Dashboard";
import AdminAccount from "./AdminAccount/AdminAccount";
import General from "./General/General";
import Password from "./Password/Password";
import Sidebar from "./Sidebar/Sidebar";

function Settings() {
  const [activePage, setActivePage] = useState("general");

  const activePageHandler = (page: string) => () => {
    setActivePage(page);
  };
  return (
    <DashWrapper>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={3}>
          <Sidebar
            activePageHandler={activePageHandler}
            activePage={activePage}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          {activePage === "general" && <General />}
          {activePage === "password" && <Password />}
          {activePage === "admin account" && <AdminAccount />}
        </Grid>
      </Grid>
    </DashWrapper>
  );
}

export default Settings;
