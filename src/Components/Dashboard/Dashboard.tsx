import { Grid } from "@mui/material";
import ContentHeader from "./ContentHeader/ContentHeader";

function Dashboard() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
