import { Grid, Container, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import {
  ShopCategoriesFilter,
  ShopColorFilter,
  ShopPriceFilter,
  ShopFiltersDrawer,
  ShopToolbar,
  BreadcrumbsCp,
} from "../../../Components";

function Shop() {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer = (open: boolean) => {
    setDisplayDrawer(open);
  };
  return (
    <>
      <BreadcrumbsCp title={"products"} />
      <Container sx={{ marginY: "50px" }}>
        <Grid container columnSpacing={4}>
          {matches && (
            <Grid item xs={3.5}>
              <ShopCategoriesFilter />
              <ShopColorFilter />
              <ShopPriceFilter />
            </Grid>
          )}
          {!matches && (
            <ShopFiltersDrawer
              displayDrawer={displayDrawer}
              toggleDrawer={toggleDrawer}
            />
          )}
          <Grid item xs={12} md={8.5}>
            <ShopToolbar matches={matches} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Shop;
