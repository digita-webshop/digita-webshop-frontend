import React from "react";
import SpecialCard from "../SpecialCard/SpecialCard";
import { Grid } from "@mui/material";
import { otherSpecialData } from "../../../../Services/Utils/Data";

const SpecialCards = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ marginTop: "1rem" }}>
        {otherSpecialData.map((item) => (
          <SpecialCard
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
