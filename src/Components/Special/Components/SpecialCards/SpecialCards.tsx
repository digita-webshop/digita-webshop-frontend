import React from "react";
import SpecialCard from "../SpecialCard/SpecialCard";
import { Grid } from "@mui/material";
import { specialCardData } from "../../../../Services/Data/data";

const SpecialCards = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ marginTop: "1rem" }}>
        {specialCardData.map((item, index) => (
          <SpecialCard
            key={index}
            id={index}
            title={item.title}
            name={item.name}
            image={item.image}
          />
        ))}
      </Grid>
    </>
  );
};

export default SpecialCards;
