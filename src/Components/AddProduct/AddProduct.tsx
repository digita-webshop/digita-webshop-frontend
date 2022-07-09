import { Grid } from "@mui/material";
import ContentHeader from "./ContentHeader/ContentHeader";

function AddProduct() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
    </Grid>
  );
}

export default AddProduct;
