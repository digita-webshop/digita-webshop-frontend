import { Box, Container, Grid } from "@mui/material";
import ProductHeader from "./Components/Header/ProductHeader";
import ProductItem from "./Components/ProductItem/ProductItem";
import BasicBtn from "./Components/Button/BasicBtn";
import ProductCards from "./Components/ProductCards/ProductCards";
import { useInView } from "react-intersection-observer";
import { subMainContainer } from "../../Styles/Products";
import { useState } from "react";
import { IProduct } from "../../Services/Utils/Types/product";
import ProductPlaceholder from "../Placeholders/ProductPlaceholder";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
interface Props {
  products: IProduct[] | undefined;
  isLoading: boolean;
}
const Products = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("audio & video game");
  const { ref, inView } = useInView({ triggerOnce: true });
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(
    `category=${selectedCategory.replace("&", "%26")}`
  );
  console.log(products);

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
            {!isLoading && !isError
              ? products?.data
                  .filter((item) => item.category === selectedCategory)
                  .slice(0, 8)
                  .map((item) => (
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
                        listView={false}
                      />
                    </Grid>
                  ))
              : Array(8)
                  .fill(null)
                  .map((item, index) => (
                    <Grid item xs={12} sm={4} md={3}>
                      <ProductPlaceholder key={index} />
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
