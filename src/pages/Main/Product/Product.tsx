import { Box, Container, Grid, Typography } from "@mui/material";
import { teamTitleStyle } from "components/Product/styles";
import { Tabs, BoughtTogether, ProductDetails, ShareProduct } from "components/Product";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import ProductItem from "components/Home/Products/Components/ProductItem/ProductItem";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery, useGetProductQuery } from "redux/products/productsApi";
import Loading from "components/Loading/Loading";
import { Helmet } from "react-helmet-async";
import Error from "components/Error/Error";

const Product = () => {
  const { id }: any = useParams();

  const { data: productData, isLoading: productLoading, isError: productError } = useGetProductQuery(id);
  const { data: productsData, isLoading: productsLoading, isError: productsError } = useGetAllProductsQuery("");

  const product = productData?.data!;
  const products = productsData?.data ?? [];

  if (productLoading || productsLoading) {
    return <Loading full />;
  }
  if (productError || productsError) {
    return <Error />;
  }
  return (
    <Box bgcolor={"white"}>
      <Helmet>
        <title>{product?.title}</title>
      </Helmet>
      <Breadcrumbs title={"product"} lastPath={product?.title} category={product?.category} />
      <Container maxWidth={"lg"}>
        <ProductDetails product={product} />
        <BoughtTogether products={products} />
        <Tabs product={product} />
        <ShareProduct />

        <Box sx={{ textAlign: "left", pb: 8 }}>
          <Typography variant="h4" sx={teamTitleStyle}>
            RELATED PRODUCTS
          </Typography>
          <Grid container spacing={{ xs: 1, md: 2 }}>
            {products.slice(0, 4).map((product) => (
              <Grid item xs={6} sm={4} md={3} key={product._id}>
                <ProductItem product={product} listView={false} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Product;
