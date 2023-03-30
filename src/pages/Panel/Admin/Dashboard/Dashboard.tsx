import { Grid } from "@mui/material";
import { useGetAllOrdersQuery } from "redux/orders/ordersApi";
import { dashboardStatisticCards } from "components/Dashboard/data";
import { DashTitle } from "components/Dashboard/styles";
import { CardWrapper, ErrorText } from "styles/panel";
import { NotFound, PanelLoading } from "components";
import { ContentHeader, MarketingProgress, SaleStatisticsChart, StatisticsCard } from "components/Dashboard";
import OrdersTable from "components/Orders/OrdersTable/OrdersTable";

function Dashboard() {
  const { data: ordersData, isLoading, isError } = useGetAllOrdersQuery();
  const orders = ordersData?.data ?? [];
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        {dashboardStatisticCards.map(({ id, title, subtitle, icon, color, bgColor }) => (
          <Grid item xs={12} md={4} key={id}>
            <StatisticsCard title={title} subtitle={subtitle} icon={icon} color={color} bgColor={bgColor} />
          </Grid>
        ))}
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
          {isLoading && <PanelLoading />}
          {isError && <ErrorText>ERROR:Could not retrieve data!</ErrorText>}
          {orders?.length === 0 && !isLoading && !isError && <NotFound />}
          {orders && <OrdersTable orders={orders.slice(0, 10)} />}
        </CardWrapper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
