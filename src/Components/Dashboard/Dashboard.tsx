import { Grid, Icon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContentHeader from "./ContentHeader/ContentHeader";
import StatisticsCard from "./StatisticsCard/StatisticsCard";

function Dashboard() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
      <Grid container item xs={12}>
        <Grid xs={12} md={4}>
          <StatisticsCard />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
