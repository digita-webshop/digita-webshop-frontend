import { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import ProductHeader from "./Components/Header/ProductHeader";
import ProductItem from "./Components/ProductItem/ProductItem";
import BasicBtn from "./Components/Button/BasicBtn";
import ProductCards from "./Components/ProductCards/ProductCards";
import { useInView } from "react-intersection-observer";
import { subMainContainer } from "./styles";
import ProductPlaceholder from "components/Placeholders/ProductPlaceholder";
import { useGetAllProductsQuery } from "redux/products/productsApi";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("audio & video game");
  const { ref, inView } = useInView({ triggerOnce: true });

  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetAllProductsQuery(`category=${selectedCategory.replaceAll("&", "%26")}`);
  const products = productsData?.data ?? [];

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
      <Container maxWidth={"lg"} sx={subMainContainer} className={inView ? "slideInFromBottom" : ""}>
        <ProductHeader selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {!isLoading && !isError && products.length > 0
              ? products.map((product) => (
                  <Grid item xs={12} sm={4} md={3} key={product?._id}>
                    <ProductItem product={product} listView={false} />
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
