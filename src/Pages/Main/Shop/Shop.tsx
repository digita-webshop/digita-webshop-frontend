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
import ProductItem from "../../../Components/Products/Components/ProductItem/ProductItem";
import { productData } from "../../../Services/Utils/Data/data";

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
              <ShopColorFilter drawer={true} />
              <ShopPriceFilter drawer={true} />
            </Grid>
          )}
          {!matches && (
            <ShopFiltersDrawer
              displayDrawer={displayDrawer}
              toggleDrawer={toggleDrawer}
            />
          )}
          <Grid item xs={12} md={8.5}>
            <ShopToolbar matches={matches} toggleDrawer={toggleDrawer} />
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {productData.map((item) => (
                <Grid item xs={6} sm={4} md={4} key={item.id}>
                  <ProductItem
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    offPrice={item.offPrice}
                    price={item.price}
                    sold={item.sold}
                    starRate={item.starRate}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Shop;
