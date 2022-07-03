import { Box, Divider, Grid } from "@mui/material";
import { DashWrapper } from "../../Styles/Dashboard";
import ContentHeader from "./ContentHeader/ContentHeader";
import OrdersTable from "./OrdersTable/OrdersTable";
import TableHeader from "./TableHeader/TableHeader";

function Orders() {
  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
      <Grid item xs={12}>
        <DashWrapper
          sx={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}
        >
          <TableHeader />
        </DashWrapper>
        <Divider
          sx={{ borderColor: "common.panelBorderGrey", opacity: ".1" }}
        />
        <DashWrapper
          sx={{
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            overflow: "hidden",
          }}
        >
          <OrdersTable />
        </DashWrapper>
      </Grid>
    </Grid>
  );
}

export default Orders;
