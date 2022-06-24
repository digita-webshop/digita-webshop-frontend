import { Box, Container, Grid } from "@mui/material";
import ProductHeader from "./Components/Header/ProductHeader";
import ProductItem from "./Components/ProductItem/ProductItem";
import BasicBtn from "./Components/Button/BasicBtn";
import { productData } from "../../Services/Utils/Data/data";
import ProductCards from "./Components/ProductCards/ProductCards";
import { useInView } from "react-intersection-observer";

const Products = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        position: "relative",
        backgroundColor: "white",
        marginY: "-120px",
        width: "96%",
        zIndex: "10",
      }}
      ref={ref}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          paddingBottom: "30px ",
          "&.slideInFromBottom": {
            animation: (theme) =>
              `slideInFromBottom 1000ms ${theme.transitions.easing.easeInOut}`,
            "@keyframes slideInFromBottom": {
              "0%": {
                opacity: 0,
                transform: "translateY(50%)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          },
        }}
        className={inView ? "slideInFromBottom" : ""}
      >
        <ProductHeader />
        <Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {productData.slice(0, 8).map((item) => (
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
    </Container>
  );
};

export default Products;
