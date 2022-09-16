import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import React, { useEffect } from "react";
import { setCart, setQuantity } from "../../../../features/cart/cartSlice";
import CartItem from "../../../../Components/ShoppingCart/Types/CartItemType";
import { handleRowDelete } from "../../../../Components/ShoppingCart/Services";

function ShopCart() {
  const dispatch = useDispatch();
  useEffect(() => {
    const dummyCartData = [
      {
        id: 1,
        image:
          "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-6.jpg",
        product: "IPhone",
        price: 5,
        quantity: 4,
        total: 3,
        alt: "iphone-image",
      },
      {
        id: 2,
        image:
          "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-6.jpg",
        product: "Microsoft Xbox One SP",
        price: 4,
        quantity: 2,
        total: 3,
        alt: "xbox-image",
      },
      {
        id: 3,
        image:
          "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-7.jpg",
        product: "Microsoft Xbox One S Blue Grey",
        price: 1,
        quantity: 3,
        total: 1,
        alt: "xbox-1-image",
      },
      {
        id: 4,
        image:
          "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-7.jpg",
        product: "Microsoft Xbox One S Blue Grey",
        price: 1,
        quantity: 3,
        total: 1,
        alt: "xbox-1-image",
      },
      {
        id: 5,
        image:
          "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-7.jpg",
        product: "Microsoft Xbox One S Blue Grey",
        price: 1,
        quantity: 3,
        total: 1,
        alt: "xbox-1-image",
      },
      {
        id: 6,
        image:
          "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-7.jpg",
        product: "Microsoft Xbox One S Blue Grey",
        price: 1,
        quantity: 3,
        total: 1,
        alt: "xbox-1-image",
      },
    ];
    dispatch(setCart(dummyCartData));
    dispatch(setQuantity(dummyCartData));
  }, []);
  const cartList = useSelector(
    (state: RootState) => state.cartReducer.cartList
  );
  const subtotal = cartList.reduce((acc: number, curr: CartItem) => {
    acc += curr.quantity * curr.price;
    return acc;
  }, 0);

  if (cartList.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "absolute",
        right: "0px",
        top: "82px ",
        padding: "15px",
        backgroundColor: "white",
        display: "none",
        cursor: "auto",
        "&:hover": {
          display: "inline-block",
        },
      }}
      className="shop-cart"
    >
      <List sx={{ maxHeight: "360px", overflow: "auto" }}>
        {cartList.map((item: CartItem) => {
          return (
            <ListItem key={item.id} disableGutters>
              <img src={item.image} alt="product" width={75} height={75} />
              <ListItemText sx={{ marginLeft: "16px", marginRight: "40px" }}>
                <Typography variant="body2" color={"primary"}>
                  {item.product}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Typography variant="subtitle1" color={"secondary"}>
                    {item.quantity} x
                  </Typography>
                  <Typography variant="body2" color={"primary"}>
                    {item.price.toFixed(2)}
                  </Typography>
                </Box>
              </ListItemText>
              <ListItemIcon>
                <Box>
                  <CloseRounded
                    onClick={() => handleRowDelete(item.id)}
                    sx={{
                      border: "1px solid black",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      padding: "3px",
                      color: "#333333 !important",
                      "&:hover": {
                        border: "1px solid #f03637",
                        color: "#f03637 !important",
                      },
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </ListItemIcon>
            </ListItem>
          );
        })}
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
          {subtotal.toFixed(2)}
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
          <Button variant="contained" fullWidth={true}>
            CHECKOUT
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default ShopCart;
