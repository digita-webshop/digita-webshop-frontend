import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

function PanelLayout() {
  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default PanelLayout;
