import { Box, Container, Grid } from "@mui/material";
import ProductHeader from "./Components/Header/ProductHeader";
import ProductItem from "./Components/ProductItem/ProductItem";
import BasicBtn from "./Components/Button/BasicBtn";
import { productData } from "../../Services/Utils/Data/data";
import ProductCards from "./Components/ProductCards/ProductCards";

const Products = () => {
  return (
    <Container maxWidth={"lg"}>
      <ProductHeader />
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {productData.map((item) => (
            <Grid item xs={6} sm={4} md={3} key={item.id}>
              <ProductItem
                id={item.id}
                name={item.name}
                image={item.image}
                offPrice={item.offPrice}
                price={item.price}
                sold={item.sold}
                starRate={item.starRate}
                description={item.description}
                listView={false}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <BasicBtn />
      <ProductCards />
    </Container>
  );
};

export default Products;
