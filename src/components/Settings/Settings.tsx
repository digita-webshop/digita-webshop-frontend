import { useState } from "react";
import { Grid } from "@mui/material";
import { useAppSelector } from "../../redux/store";
import { CardWrapper } from "../../styles/panel";
import Addresses from "./Components/Addresses/Addresses";
import General from "./Components/General/General";
import Password from "./Components/Password/Password";
import Sidebar from "./Components/Sidebar/Sidebar";

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
          <Sidebar activePageHandler={activePageHandler} activePage={activePage} />
        </Grid>
        <Grid item xs={12} lg={9}>
          {activePage === "general" && <General user={user!} />}
          {activePage === "password" && <Password id={user?._id!} role={user?.role!} />}
          {activePage === "addresses" && <Addresses user={user!} />}
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Settings;
