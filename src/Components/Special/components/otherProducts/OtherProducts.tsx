import React from "react";
import OtherProductItem from "./components/otherProductItem/OtherProductItem";
import { Grid } from "@mui/material";
import { otherSpecialData } from "../../../../Services/Utils/data";

const OtherProducts = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ marginTop: "1rem" }}>
        {otherSpecialData.map((item) => (
          <OtherProductItem
            title={item.title}
            name={item.name}
            image={item.image}
          />
        ))}
      </Grid>
    </>
  );
};

export default OtherProducts;
