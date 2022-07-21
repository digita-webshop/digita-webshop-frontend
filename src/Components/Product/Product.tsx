import { Box, Container, Grid, Typography } from "@mui/material";
import { teamTitleStyle } from "../../Styles/Product/index";

import { productData } from "../../Services/Utils/Data/data";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import BoughtTogether from "./Components/BoughtTogether/BoughtTogether";
import Tabs from "./Components/Tabs/Tabs";
import ShareProduct from "./Components/ShareProduct/ShareProduct";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ProductItem from "./../Products/Components/ProductItem/ProductItem";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id }: any = useParams();
  const product = productData.find((product) => product.id === +id);
  return (
    <Box bgcolor={"white"}>
      <Breadcrumbs title={"product"} lastPath={product?.name} />
      <Container maxWidth={"lg"}>
        <ProductDetails product={product} />
        <BoughtTogether />
        <Tabs />
        <ShareProduct />

        <Box sx={{ textAlign: "left", pb: 8 }}>
          <Typography variant="h4" sx={teamTitleStyle}>
            RELATED PRODUCTS
          </Typography>
          <Grid container spacing={{ xs: 1, md: 2 }}>
            {productData.slice(0, 4).map((item) => (
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
      </Container>
    </Box>
  );
};

export default Product;
