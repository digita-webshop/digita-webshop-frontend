import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { productCardData } from "../../../../Services/Utils/Data/data";

const ProductCards = () => {
  return (
    <Grid container spacing={3} marginTop="3rem" marginBottom="3rem">
      {productCardData.map((item) => (
        <ProductCard title={item.title} name={item.name} image={item.image} />
      ))}
    </Grid>
  );
};

export default ProductCards;
