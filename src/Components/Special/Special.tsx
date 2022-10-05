import { Container, Grid, Box } from "@mui/material";
import SpecialHeader from "./Components/Header/SpecialHeader";
import SpecialItem from "./Components/SpecialItem/SpecialItem";
import SupportItems from "./Components/SupportItems/SupportItems";
import SpecialCards from "./Components/SpecialCards/SpecialCards";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import SpecialProductPlaceholder from "../Placeholders/SpecialProductPlaceholder";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
import { useAppSelector } from "@/features/store";
import { useGetAllCartItemQuery } from "@/features/cart/cartApi";

const Special = () => {
  const { user } = useAppSelector((state) => state.reducer.auth);
  const { cartList } = useAppSelector((state) => state.reducer.cart);

  const [selectedSorting, setSelectedSorting] = useState("latest");

  const { ref, inView } = useInView({ triggerOnce: true });
  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetAllProductsQuery(`page=1&limit=9&sort=${selectedSorting}`);
  const products = productsData?.data ?? [];

  const { data: cartData } = useGetAllCartItemQuery();
  const cart = cartData?.data?.products ?? [];
  const cartItems = user ? cart : cartList;

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
        sx={{
          overflow: "hidden",
          paddingY: "20px",
          animation: (theme) =>
            inView
              ? `slideInFromBottom 1000ms ${theme.transitions.easing.easeInOut}`
              : "",
        }}
      >
        <SpecialHeader
          selectedSorting={selectedSorting}
          setSelectedSorting={setSelectedSorting}
        />

        <Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {!isLoading && !isError
              ? products.map((item) => (
                  <SpecialItem
                    key={item._id!}
                    product={item}
                    cartItems={cartItems}
                  />
                ))
              : Array(9)
                  .fill(null)
                  .map((item, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={4}
                      sx={{ height: "150px" }}
                      key={index}
                    >
                      <SpecialProductPlaceholder />
                    </Grid>
                  ))}
          </Grid>
        </Box>
        <SpecialCards />
        <SupportItems />
      </Container>
    </Container>
  );
};

export default Special;
