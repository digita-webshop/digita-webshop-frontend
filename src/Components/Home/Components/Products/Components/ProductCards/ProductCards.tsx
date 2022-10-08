import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { productCardData } from "../../../../../../data/data";

const ProductCards = () => {
  return (
    <Grid
      container
      spacing={3}
      marginTop="3rem"
      marginBottom="3rem"
      sx={{
        overflow: "hidden",
      }}
    >
      {productCardData.map((item, index) => (
        <ProductCard
          key={item.id}
          id={index}
          title={item.title}
          name={item.name}
          image={item.image}
        />
      ))}
    </Grid>
  );
};

export default ProductCards;
