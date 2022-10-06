import { Box, Button, Divider, Link, List, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAppSelector } from "../../../../features/store";
import { shopCartWrapper } from "../../../../Styles/Appbar";
import { useGetAllCartItemQuery } from "../../../../features/cart/cartApi";
import ShopCartItem from "./ShopCartItem/ShopCartItem";
import { getSubtotal } from "../../../../Utils/getSubtotal";
import { useCheckoutNavigate } from "@/hooks/useCheckoutNavigate";

function ShopCart() {
  const { user } = useAppSelector((state) => state.reducer.auth);
  const { cartList, subtotal } = useAppSelector((state) => state.reducer.cart);

  const { checkoutHandler } = useCheckoutNavigate();

  const { data: cartData, isLoading, isError } = useGetAllCartItemQuery();
  const cart = cartData?.data?.products ?? [];

  const cartItems = user ? cart : cartList;

  let cartSubtotal = subtotal;
  if (user) {
    cartSubtotal = getSubtotal(cartItems);
  }

  return (
    <Box sx={shopCartWrapper} className="shop-cart">
      <List sx={{ maxHeight: "360px", overflow: "overlay" }}>
        {cartItems.length === 0 && !isLoading && !isError && (
          <Box width="300px" marginY={3}>
            <Typography
              textAlign="center"
              textTransform="capitalize"
              color="black"
            >
              your cart is empty
            </Typography>
          </Box>
        )}
        {cartItems.length !== 0 &&
          !isLoading &&
          cartItems?.map((item) => (
            <ShopCartItem
              key={item?._id}
              id={item?._id}
              name={item?.name}
              price={item?.price}
              quantity={item?.quantity}
              image={item?.productId?.image ?? ""}
              productId={item?.productId?._id ?? ""}
            />
          ))}
        <Divider />
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "13px",
        }}
      >
        <Typography variant="subtitle2" color={"secondary"} fontWeight={400}>
          SUBTOTAL:
        </Typography>
        <Typography variant="subtitle2" color={"primary"}>
          {cartSubtotal?.toFixed(2)}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          paddingY: "20px",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Link
          component={RouterLink}
          to="/cart"
          sx={{ textDecoration: "none", width: "50%" }}
        >
          <Button
            variant="contained"
            fullWidth={true}
            color="error"
            sx={{
              "&:hover": { backgroundColor: "#333333" },
            }}
          >
            VIEW CARD
          </Button>
        </Link>
        <Link
          component={RouterLink}
          to="/checkout"
          sx={{ textDecoration: "none", width: "50%" }}
        >
          <Button
            variant="contained"
            fullWidth={true}
            onClick={checkoutHandler}
          >
            {!user ? "LOGIN &" : ""} CHECKOUT
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default ShopCart;
