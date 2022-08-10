import React, { useEffect, useState } from "react";
import DynamicButton from "./DynamicButton/DynamicButton";
import { Box, Container } from "@mui/material";
import CartListTable from "./Tables/CartListTable";
import CartTotalTable from "./Tables/CartTotalTable";
import CartUpdated, { UpdateType } from "./CartUpdated";
import CartItem from "./Types/CartItemType";
import { styled } from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import {setCart,setQuantity} from "../../features/cart/cartSlice";

export type UpdateCart = {
  item?: CartItem;
  type?: UpdateType;
};

const ShoppingCart = () => {
  const [cartUpdated, setCartUpdated] = useState<UpdateCart | null>(null);
  const [values, setValues] = useState<CartItem[]>([]);
  // @ts-ignore todo fix later
  const cartList = useSelector((state) => state.cartReducer.cartList);
  const dispatch = useDispatch()
  useEffect(() => {
    const temp: CartItem[] = [];
    cartList.map((item: CartItem) => {
      temp.push(item);
    });
    setValues(temp);
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
    ];
    // @ts-ignore todo fix this later
    dispatch(setCart(dummyCartData));

    // @ts-ignore todo fix this later
    dispatch(setQuantity(dummyCartData));
  }, []);

  const total = cartList.reduce((acc: number, curr: CartItem) => {
    acc += curr.quantity * curr.price;
    return acc;
  }, 0);

  const TableContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const CustomContainer = styled(Container)(({ theme }) => ({
    background: "white",
    [theme.breakpoints.up("md")]: {
      padding: "50px 16px",
    },
  }));

  return (
    <CustomContainer>
      {cartUpdated && (
        <CartUpdated
          item={cartUpdated.item}
          type={cartUpdated.type}
          setCartUpdated={setCartUpdated}
        />
      )}
      {cartList.length === 0 ? (
        <Box sx={{ padding: "35px 0 50px" }}>
          <DynamicButton icon={true} title={"Return To Shop"} href={"/"} />
        </Box>
      ) : (
        <TableContainer sx={{ display: "flex" }}>
          <CartListTable
            cartList={cartList}
            values={values}
            setValues={setValues}
            setCartUpdated={setCartUpdated}
          />
          <CartTotalTable total={total} />
        </TableContainer>
      )}
    </CustomContainer>
  );
};

export default ShoppingCart;
