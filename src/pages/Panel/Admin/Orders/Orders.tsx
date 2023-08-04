import { useState } from "react";
import { Box, Divider, Grid, SelectChangeEvent } from "@mui/material";
import { useGetAllOrdersQuery } from "redux/orders/ordersApi";
import { CardWrapper, ErrorText } from "styles/panel";
import { paginationStyle } from "components/PanelProducts/styles";
import { NotFound, PanelLoading, PanelPagination } from "components";
import { ContentHeader, OrdersTable, TableToolbar } from "components/Orders";

function Orders() {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(20);

  const { data: ordersData, isLoading, isError } = useGetAllOrdersQuery();
  const orders = ordersData?.data ?? [];

  let filteredOrders = orders;
  if (selectedStatus) {
    filteredOrders = orders.filter((order) => order.status === selectedStatus);
  }

  const selectedStatusHandler = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };
  const selectedAmountHandler = (event: SelectChangeEvent) => {
    setOrdersPerPage(+event.target.value);
  };

  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
      <Grid item xs={12}>
        <CardWrapper sx={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}>
          <TableToolbar
            selectedStatus={selectedStatus}
            ordersPerPage={ordersPerPage}
            selectedStatusHandler={selectedStatusHandler}
            selectedAmountHandler={selectedAmountHandler}
          />
        </CardWrapper>
        <Divider sx={{ borderColor: "common.panelBorderGrey", opacity: ".1" }} />
        <CardWrapper
          sx={{
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            overflow: "hidden",
          }}
        >
          {isLoading && <PanelLoading />}
          {isError && <ErrorText>ERROR:Could not retrieve data!</ErrorText>}
          {filteredOrders?.length === 0 && !isLoading && !isError && <NotFound />}
          {filteredOrders?.length !== 0 && <OrdersTable orders={filteredOrders} />}
          <Box sx={paginationStyle}>
            <PanelPagination
              productsPerPage={ordersPerPage}
              totalProducts={filteredOrders.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Box>
        </CardWrapper>
      </Grid>
    </Grid>
  );
}

export default Orders;
