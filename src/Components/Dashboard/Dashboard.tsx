import { Grid } from "@mui/material";
import { useGetAllOrdersQuery } from "../../features/orders/ordersApi";
import { dashboardStatisticCards } from "../../Services/Data/data";
import { DashTitle } from "../../Styles/Dashboard";
import { CardWrapper, ErrorText } from "../../Styles/panelCommon";
import NotFound from "../EmptyList/NotFound";
import PanelLoading from "../Loading/PanelLoading";
import OrdersTable from "../Orders/OrdersTable/OrdersTable";
import ContentHeader from "./ContentHeader/ContentHeader";
import MarketingProgress from "./MarketingProgress/MarketingProgress";
import SaleStatisticsChart from "./SaleStatisticsChart/SaleStatisticsChart";
import StatisticsCard from "./StatisticsCard/StatisticsCard";

function Dashboard() {
  const { data: ordersData, isLoading, isError } = useGetAllOrdersQuery();
  const orders = ordersData?.data ?? [];
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
