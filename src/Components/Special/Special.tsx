import { Container, Grid, Box } from "@mui/material";
import React from "react";
import SpecialHeader from "./Components/Header/SpecialHeader";
import SpecialItem from "./Components/SpecialItem/SpecialItem";
import {specialProducts} from '../../Services/Utils/data'
import SupportItems from "./Components/SupportItems/SupportItems";
import OtherProducts from "./Components/OtherProducts/OtherProducts";

const Special = () => {
  return (
    <Container>
      <SpecialHeader />

      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {specialProducts.map((item) => (
            <SpecialItem
            id={item.id}
            name={item.name}
            image={item.image}
            offPrice={item.offPrice}
            price={item.price}
            starRate={item.starRate}
          />
          ))}
        </Grid>
      </Box>
      <OtherProducts />
      <SupportItems />
    </Container>
  );
};

export default Special;
