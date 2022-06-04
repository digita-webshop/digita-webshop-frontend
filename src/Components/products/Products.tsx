import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ProductHeader from "./components/header/ProductHeader";
import ProductItem from "./components/productItem/ProductItem";
import BasicBtn from "./components/button/BasicBtn";
import { productData } from "../../Services/Utils/data";
import OtherProducts from "./components/otherProducts/OtherProducts";

const Products = () => {
  return (
    <Container>
      <ProductHeader />

      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {productData.map((item) => (
            <ProductItem
              id={item.id}
              name={item.name}
              image={item.image}
              offPrice={item.offPrice}
              price={item.price}
              sold={item.sold}
              starRate={item.starRate}
            />
          ))}
        </Grid>
      </Box>
      <BasicBtn />
      <OtherProducts />
    </Container>
  );
};

export default Products;
