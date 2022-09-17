import { Grid } from "@mui/material";
import { dashboardStatisticCards } from "../../Services/Data/data";
import { DashTitle } from "../../Styles/Dashboard";
import { CardWrapper } from "../../Styles/panelCommon";
import OrdersTable from "../Orders/OrdersTable/OrdersTable";
import ContentHeader from "./ContentHeader/ContentHeader";
import MarketingProgress from "./MarketingProgress/MarketingProgress";
import SaleStatisticsChart from "./SaleStatisticsChart/SaleStatisticsChart";
import StatisticsCard from "./StatisticsCard/StatisticsCard";

function Dashboard() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        {dashboardStatisticCards.map(
          ({ id, title, subtitle, icon, color, bgColor }) => (
            <Grid item xs={12} md={4} key={id}>
              <StatisticsCard
                title={title}
                subtitle={subtitle}
                icon={icon}
                color={color}
                bgColor={bgColor}
              />
            </Grid>
          )
        )}
      </Grid>
      <Grid item xs={12} lg={8}>
        <SaleStatisticsChart />
      </Grid>
      <Grid item xs={12} lg={4}>
        <MarketingProgress />
      </Grid>
      <Grid item xs={12}>
        <CardWrapper
          sx={{
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            overflow: "hidden",
          }}
        >
          <DashTitle sx={{ marginBottom: "30px" }}>latest orders</DashTitle>
          <OrdersTable selectedAmount={"8"} />
        </CardWrapper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
