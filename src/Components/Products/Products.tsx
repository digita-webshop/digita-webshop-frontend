import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ProductHeader from "./Components/Header/ProductHeader";
import ProductItem from "./Components/ProductItem/ProductItem";
import BasicBtn from "./Components/Button/BasicBtn";
import { productData } from "../../Services/Utils/Data/data";
import ProductCards from "./Components/ProductCards/ProductCards";

const Products = () => {
  return (
    <Container sx={{ padding: "0 0 2rem 0" }}>
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
      <ProductCards />
    </Container>
  );
};

export default Products;
