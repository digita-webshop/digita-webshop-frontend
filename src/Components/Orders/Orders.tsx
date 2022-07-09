import { Divider, Grid, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { CardWrapper } from "../../Styles/panelCommon";
import ContentHeader from "./ContentHeader/ContentHeader";
import OrdersTable from "./OrdersTable/OrdersTable";
import TableHeader from "./TableHeader/TableHeader";

function Orders() {
  const [selectedStatus, setSelectedStatus] = useState("status");
  const [selectedAmount, setSelectedAmount] = useState("20");

  const selectedStatusHandler = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };
  const selectedAmountHandler = (event: SelectChangeEvent) => {
    setSelectedAmount(event.target.value);
  };
  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
      <Grid item xs={12}>
        <CardWrapper
          sx={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}
        >
          <TableHeader
            selectedStatus={selectedStatus}
            selectedAmount={selectedAmount}
            selectedStatusHandler={selectedStatusHandler}
            selectedAmountHandler={selectedAmountHandler}
          />
        </CardWrapper>
        <Divider
          sx={{ borderColor: "common.panelBorderGrey", opacity: ".1" }}
        />
        <CardWrapper
          sx={{
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            overflow: "hidden",
          }}
        >
          <OrdersTable selectedAmount={selectedAmount} />
        </CardWrapper>
      </Grid>
    </Grid>
  );
}

export default Orders;
