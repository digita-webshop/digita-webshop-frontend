import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { DashWrapper } from "../../Styles/Dashboard";
import AdminAccount from "./AdminAccount/AdminAccount";
import General from "./General/General";
import Password from "./Password/Password";
import Sidebar from "./Sidebar/Sidebar";

function Settings() {
  return (
    <DashWrapper>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Routes>
            <Route path="general" element={<General />} />
            <Route path="password" element={<Password />} />
            <Route path="admin-account" element={<AdminAccount />} />
          </Routes>
        </Grid>
      </Grid>
    </DashWrapper>
  );
}

export default Settings;
