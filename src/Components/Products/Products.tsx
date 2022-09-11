import { Box, Container, Grid } from "@mui/material";
import ProductHeader from "./Components/Header/ProductHeader";
import ProductItem from "./Components/ProductItem/ProductItem";
import BasicBtn from "./Components/Button/BasicBtn";
import { productData } from "../../Services/Utils/Data/data";
import ProductCards from "./Components/ProductCards/ProductCards";
import { useInView } from "react-intersection-observer";
import { subMainContainer } from "../../Styles/Products";
import { useState } from "react";
import { IProduct } from "../../Services/Utils/Types/product";
interface Props {
  products: IProduct[];
}
const Products = ({ products }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState("audio & video game");
  const { ref, inView } = useInView({ triggerOnce: true });

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
            {productData
              .filter((item) => item.category === selectedCategory)
              .slice(0, 8)
              .map((item) => (
                <Grid item xs={12} sm={4} md={3} key={item.id}>
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
    </Container>
  );
};

export default Products;
