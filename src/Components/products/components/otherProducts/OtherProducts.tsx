import { Grid } from "@mui/material";
import OtherProductItem from "./Components/OtherProductItem/OtherProductItem";
import { otherProductData } from '../../../../Services/Utils/data';

const OtherProducts = () => {
  return (
    <Grid container spacing={3} marginTop="3rem" marginBottom="3rem">
      {otherProductData.map((item) => (
        <OtherProductItem title={item.title} name={item.name} image={item.image}/>
      ))}
    </Grid>
  );
};

export default OtherProducts;
