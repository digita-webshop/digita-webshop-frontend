import { Grid, SelectChangeEvent, Divider } from "@mui/material";
import { useState } from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import TableHeader from "../Orders/TableHeader/TableHeader";
import ReviewsTable from "./ReviewsTable/ReviewsTable";
import { CardWrapper } from "../../Styles/panelCommon";

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
        <CardWrapper
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
        </CardWrapper>
        <CardWrapper>
          <ReviewsTable selectedAmount={selectedAmount} />
        </CardWrapper>
      </Grid>
    </Grid>
  );
};

export default PanelReviews;
