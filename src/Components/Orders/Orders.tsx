import { Box, Grid } from "@mui/material";
import ContentHeader from "./ContentHeader/ContentHeader";
import TableHeader from "./TableHeader/TableHeader";

function Orders() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
      <Grid container item xs={12} sx={{ bgcolor: "white" }}>
        <Grid item xs={12}>
          <TableHeader />
        </Grid>

        <Grid item xs={12}></Grid>
      </Grid>
    </Grid>
  );
}

export default Orders;
