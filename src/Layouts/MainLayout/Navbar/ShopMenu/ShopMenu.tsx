import { Grid } from "@mui/material";

import ShopMenuCard from "./ShopMenuCard/ShopMenuCard";
import ShopMenuCategories from "./ShopMenuCategories/ShopMenuCategories";
import ShopMenuFeature from "./ShopMenuFeature/ShopMenuFeature";

function ShopMenu() {
  return (
    <Grid container maxWidth={"xl"} marginX={"auto"}>
      <Grid item xs={4} sx={{ borderRight: "1px solid #dedede" }}>
        <ShopMenuCategories />
      </Grid>
      <Grid item xs={4} sx={{ borderRight: "1px solid #dedede" }}>
        <ShopMenuFeature />
      </Grid>
      <Grid item xs={4}>
        <ShopMenuCard />
      </Grid>
    </Grid>
  );
}

export default ShopMenu;
