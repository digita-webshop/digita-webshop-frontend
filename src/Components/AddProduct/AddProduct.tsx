import { Grid } from "@mui/material";
import ContentHeader from "./ContentHeader/ContentHeader";
import Details from "./Details/Details";

function AddProduct() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
      <Grid container item xs={12}>
        <Grid container item xs={12} md={8}>
          <Grid item xs={12}>
            <Details />
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Grid>
  );
}

export default AddProduct;
