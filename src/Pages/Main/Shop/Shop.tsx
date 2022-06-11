import { Grid, Container } from "@mui/material";
import { ShopCategoriesFilter } from "../../../Components";

function Shop() {
  return (
    <Container sx={{ marginY: "50px" }}>
      <Grid container columnSpacing={4}>
        <Grid item xs={3.5}>
          <ShopCategoriesFilter />
        </Grid>
        <Grid item xs={8.5}>
          ddd
        </Grid>
      </Grid>
    </Container>
  );
}

export default Shop;
