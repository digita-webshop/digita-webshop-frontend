import { Box, Container, Grid } from "@mui/material";
import ProductHeader from "./Components/Header/ProductHeader";
import ProductItem from "./Components/ProductItem/ProductItem";
import BasicBtn from "./Components/Button/BasicBtn";
import ProductCards from "./Components/ProductCards/ProductCards";
import { useInView } from "react-intersection-observer";
import { subMainContainer } from "../../Styles/Products";
import { useState } from "react";
import ProductPlaceholder from "../Placeholders/ProductPlaceholder";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
import { useGetWishlistQuery } from "../../features/wishlist/wishlistApi";
import { useAppSelector } from "../../store";

const Products = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("audio & video game");
  const { ref, inView } = useInView({ triggerOnce: true });
  const { role } = useAppSelector((state) => state.reducer.auth);

  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetAllProductsQuery(
    `category=${selectedCategory.replace("&", "%26")}`
  );
  const products = productsData?.data?.products ?? [];

  const { data: wishlistData, isLoading: wishLoading } = useGetWishlistQuery(
    role!
  );
  const wishlist = wishlistData?.data ?? [];

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        position: "relative",
        backgroundColor: "white",
        marginY: { xs: "-45px", sm: "-120px" },
        width: "96%",
        zIndex: "10",
      }}
      ref={ref}
    >
      <Container
        maxWidth={"lg"}
        sx={subMainContainer}
        className={inView ? "slideInFromBottom" : ""}
      >
        <ProductHeader
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {!isLoading && !isError && !wishLoading
              ? products.map((item) => (
                  <Grid item xs={12} sm={4} md={3} key={item._id}>
                    <ProductItem
                      id={item._id!}
                      title={item.title}
                      image={item.image}
                      offPrice={item.offPrice}
                      price={item.price}
                      sold={false}
                      rating={item.rating}
                      description={item.shortDescription}
                      wished={wishlist?.some((i) => i._id === item._id!)}
                      listView={false}
                    />
                  </Grid>
                ))
              : Array(8)
                  .fill(null)
                  .map((item, index) => (
                    <Grid item xs={12} sm={4} md={3} key={index}>
                      <ProductPlaceholder />
                    </Grid>
                  ))}
          </Grid>
        </Box>
        <BasicBtn />
        <ProductCards />
      </Container>
    </Container>
  );
};

export default Products;
