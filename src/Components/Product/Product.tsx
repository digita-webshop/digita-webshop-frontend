import { Box, Container, Grid, Typography } from "@mui/material";
import { teamTitleStyle } from "../../Styles/Product/index";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import BoughtTogether from "./Components/BoughtTogether/BoughtTogether";
import Tabs from "./Components/Tabs/Tabs";
import ShareProduct from "./Components/ShareProduct/ShareProduct";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ProductItem from "./../Products/Components/ProductItem/ProductItem";
import { useParams } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../../features/products/productsApi";
import Loading from "../Loading/Loading";
import { useGetWishlistQuery } from "../../features/wishlist/wishlistApi";
import { useAppSelector } from "../../features/store";

const Product = () => {
  const { role } = useAppSelector((state) => state.reducer.auth);

  const { id }: any = useParams();

  const { data: productData, isLoading: productLoading } =
    useGetProductQuery(id);
  const { data: productsData, isLoading: productsLoading } =
    useGetAllProductsQuery("");

  const product = productData?.data!;
  const products = productsData?.data ?? [];

  const { data: wishlistData, isLoading: wishLoading } = useGetWishlistQuery(
    role!
  );
  const wishlist = wishlistData?.data ?? [];

  if (productLoading || productsLoading || wishLoading) {
    return <Loading full />;
  }
  return (
    <Box bgcolor={"white"}>
      <Breadcrumbs
        title={"product"}
        lastPath={product?.title}
        category={product?.category}
      />
      <Container maxWidth={"lg"}>
        <ProductDetails
          product={product}
          wished={wishlist?.some((i) => i._id === product._id!)}
        />
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
