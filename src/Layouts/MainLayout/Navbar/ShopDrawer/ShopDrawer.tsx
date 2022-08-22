import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";
import {setCart, setQuantity} from "../../../../features/cart/cartSlice";
import CartItem from "../../../../Components/ShoppingCart/Types/CartItemType";
import {handleRowDelete} from "../../../../Components/ShoppingCart/Services";

type Anchor = "left" | "right";
type ShopDrawerProps = {
  displayDrawer: { right: boolean; left: boolean };
  toggleDrawer: (anchor: Anchor, open: boolean) => () => void;
};
function ShopDrawer({ displayDrawer, toggleDrawer }: ShopDrawerProps) {
  const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(()=>{
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
    },[])
    const cartList = useSelector((state: RootState) => state.cartReducer.cartList);
    const subtotal = cartList.reduce((acc: number, curr: CartItem) => {
        acc += curr.quantity * curr.price;
        return acc;
    }, 0);

    if (cartList.length === 0) {
        return null
    }

  return (
    <Drawer
      anchor="right"
      open={displayDrawer["right"]}
      onClose={toggleDrawer("right", false)}
    >
      <Box padding={2} position={"relative"}>
        <Box
          position={"absolute"}
          right={4}
          top={6}
          sx={{ cursor: "pointer" }}
          onClick={toggleDrawer("right", false)}
        >
          <CloseRounded fontSize="large" color="secondary" />
        </Box>
        <Box textAlign={"center"} marginBottom={2}>
          <Typography variant="h6" color="primary" fontWeight={600}>
            CART
          </Typography>
          <Divider
            sx={{
              width: "40px",
              marginX: "auto",
              marginTop: "10px",
              borderBottomWidth: "2px",
            }}
          />
        </Box>
        <Divider />
        <List sx={{ maxHeight: "360px", overflow: "auto" }}>
            {cartList.map((item:CartItem)=>{
                return <ListItem key={item.id} disableGutters>
                    <img
                        src="https://demo-61.woovinapro.com/wp-content/uploads/2018/09/product-16-330x330.jpg"
                        alt="product"
                        width={75}
                        height={75}
                    />
                    <ListItemText sx={{ marginLeft: "16px", marginRight: "40px" }}>
                        <Typography variant="body2" color={"primary"}>
                            {item.product}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                            }}
                        >
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
                                onClick={()=>handleRowDelete(item.id)}
                                sx={{
                                    border: "1px solid black",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "3px",
                                    "&:hover": {
                                        border: "1px solid red",
                                        color: "red",
                                    },
                                    cursor: "pointer",
                                }}
                            />
                        </Box>
                    </ListItemIcon>
                </ListItem>
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
          <Button
            variant="contained"
            fullWidth={true}
            color="error"
            sx={{
              "&:hover": { backgroundColor: "#333333" },
            }}
            onClick={() => {
              toggleDrawer("right", false)();
              navigate("/cart");
            }}
          >
            VIEW CARD
          </Button>
          <Button variant="contained" fullWidth={true}>
            CHECKOUT
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default ShopDrawer;
