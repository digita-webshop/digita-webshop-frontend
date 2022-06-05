import { Container, Grid, Box } from "@mui/material";
import React from "react";
import SpecialHeader from "./components/header/SpecialHeader";
import SpecialItem from "./components/specialItem/SpecialItem";

const Special = () => {
  return (
    <Container>
      <SpecialHeader />

      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <SpecialItem />
          <SpecialItem />
          <SpecialItem />
          <SpecialItem />
          <SpecialItem />
          <SpecialItem />
          <SpecialItem />
          <SpecialItem />
          <SpecialItem />
        </Grid>
      </Box>
    </Container>
  );
};

export default Special;
