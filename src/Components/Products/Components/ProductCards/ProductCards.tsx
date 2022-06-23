import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { productCardData } from "../../../../Services/Utils/Data/data";

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
      {productCardData.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          name={item.name}
          image={item.image}
        />
      ))}
    </Grid>
  );
};

export default ProductCards;
