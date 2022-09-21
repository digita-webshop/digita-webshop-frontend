import { Grid } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../store";
import { CardWrapper } from "../../Styles/panelCommon";
import Addresses from "./Addresses/Addresses";
import General from "./General/General";
import Password from "./Password/Password";
import Sidebar from "./Sidebar/Sidebar";

function Settings() {
  const { user } = useAppSelector((state) => state.reducer.auth);
  const [activePage, setActivePage] = useState("general");

  const activePageHandler = (page: string) => () => {
    setActivePage(page);
  };

  return (
    <CardWrapper>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={3}>
          <Sidebar
            activePageHandler={activePageHandler}
            activePage={activePage}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          {activePage === "general" && <General user={user!} />}
          {activePage === "password" && <Password />}
          {activePage === "addresses" && <Addresses />}
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Settings;
