import { Box, Container, Grid, Typography } from "@mui/material";
import { teamTitleStyle } from "../../Styles/Product/index";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import BoughtTogether from "./Components/BoughtTogether/BoughtTogether";
import Tabs from "./Components/Tabs/Tabs";
import ShareProduct from "./Components/ShareProduct/ShareProduct";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ProductItem from "./../Products/Components/ProductItem/ProductItem";
import { useParams } from "react-router-dom";
import { IProduct } from "../../Services/Utils/Types/product";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../../features/products/productsApi";
import Loading from "../Loading/Loading";

const Product = () => {
  const { id }: any = useParams();
  const { data: productData, isLoading: productLoading } =
    useGetProductQuery(id);
  const { data: productsData, isLoading: productsLoading } =
    useGetAllProductsQuery("");

  const product: IProduct = productData?.data!;
  const products: IProduct[] = productsData?.data!;
  if (productLoading || productsLoading) {
    return <Loading full />;
  }
  return (
    <Box bgcolor={"white"}>
      <Breadcrumbs title={"product"} lastPath={product?.title} />
      <Container maxWidth={"lg"}>
        <ProductDetails product={product} />
        <BoughtTogether />
        <Tabs
          description={product.fullDescription}
          reviews={product.reviews!}
          brand={product.brand}
        />
        <ShareProduct />

        <Box sx={{ textAlign: "left", pb: 8 }}>
          <Typography variant="h4" sx={teamTitleStyle}>
            RELATED PRODUCTS
          </Typography>
          <Grid container spacing={{ xs: 1, md: 2 }}>
            {products.slice(0, 4).map((item) => (
              <Grid item xs={6} sm={4} md={3} key={item._id}>
                <ProductItem
                  id={item._id!}
                  title={item.title}
                  image={item.image}
                  offPrice={item.offPrice}
                  price={item.price}
                  sold={false}
                  rating={item.rating}
                  description={item.shortDescription}
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
