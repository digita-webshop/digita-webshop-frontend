import { Grid } from "@mui/material";
import ContentHeader from "./ContentHeader/ContentHeader";
import Details from "./Details/Details";
import Gallery from "./Gallery/Gallery";
import Sidebar from "./Sidebar/Sidebar";

function AddProduct() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid container item xs={12} md={8}>
          <Grid item xs={12}>
            <Details />
          </Grid>
          <Grid item xs={12}>
            <Gallery />
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddProduct;
