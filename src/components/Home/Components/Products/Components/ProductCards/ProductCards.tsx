import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { productEdition } from "../../data";

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
      {productEdition.map((item, index) => (
        <ProductCard key={item.id} id={index} title={item.title} name={item.name} image={item.image} />
      ))}
    </Grid>
  );
};

export default ProductCards;
