import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { otherProductData } from '../../../../Services/Utils/Data';

const ProductCards = () => {
  return (
    <Grid container spacing={3} marginTop="3rem" marginBottom="3rem">
      {otherProductData.map((item) => (
        <ProductCard title={item.title} name={item.name} image={item.image}/>
      ))}
    </Grid>
  );
};

export default ProductCards;
