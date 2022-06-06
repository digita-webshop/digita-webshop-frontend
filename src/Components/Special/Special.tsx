import { Container, Grid, Box } from "@mui/material";
import React from "react";
import SpecialHeader from "./components/header/SpecialHeader";
import SpecialItem from "./components/specialItem/SpecialItem";
import {specialProducts} from '../../Services/Utils/data'

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
    </Container>
  );
};

export default Special;
