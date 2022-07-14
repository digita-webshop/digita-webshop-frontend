import { Grid, SelectChangeEvent, Divider } from "@mui/material";
import { useState } from "react";
import { DashWrapper } from "../../Styles/Dashboard";
import ContentHeader from "./ContentHeader/ContentHeader";
import TableHeader from "../Orders/TableHeader/TableHeader";
import ReviewsTable from "./ReviewsTable/ReviewsTable";

const PanelReviews = () => {
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
        <DashWrapper
          sx={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}
        >
          <TableHeader
            selectedStatus={selectedStatus}
            selectedAmount={selectedAmount}
            selectedStatusHandler={selectedStatusHandler}
            selectedAmountHandler={selectedAmountHandler}
          />
          <Divider
            sx={{ borderColor: "common.panelBorderGrey", opacity: ".1" }}
          />
        </DashWrapper>
        <DashWrapper>
          <ReviewsTable selectedAmount={selectedAmount} />
        </DashWrapper>
      </Grid>
    </Grid>
  );
};

export default PanelReviews;
