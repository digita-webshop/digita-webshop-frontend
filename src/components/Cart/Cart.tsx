import { useState } from "react";
import { Box, Button } from "@mui/material";
import CartListTable from "./Components/Tables/CartListTable";
import CartTotalTable from "./Components/Tables/CartTotalTable";
import CartUpdated, { UpdateType } from "./Components/CartUpdated/CartUpdated";

import { useAppSelector } from "redux/store";
import { useGetAllCartItemQuery } from "redux/cart/cartApi";
import { CartContainer, TableContainer } from "./styles";
import { getSubtotal } from "utils/getSubtotal";
import { ICartItem } from "types/cart";
import { Link } from "react-router-dom";

export type UpdateCart = {
  item?: ICartItem;
  type?: UpdateType;
};

const Cart = () => {
  const { user } = useAppSelector((state) => state.reducer.auth);
  const { cartList, subtotal } = useAppSelector((state) => state.reducer.cart);

  const [cartUpdated, setCartUpdated] = useState<UpdateCart | null>(null);

  const { data: cartData, isLoading } = useGetAllCartItemQuery(undefined, { skip: !!!user });
  const cart = cartData?.data?.products ?? [];
  const cartItems = user ? cart : cartList;

  let cartSubtotal = subtotal;
  if (user) {
    cartSubtotal = getSubtotal(cartItems);
  }

  return (
    <CartContainer>
      {cartUpdated && <CartUpdated item={cartUpdated.item} type={cartUpdated.type} setCartUpdated={setCartUpdated} />}
      {cartItems.length === 0 && !isLoading ? (
        <Box sx={{ padding: "35px 0 50px" }}>
          <Button variant="contained" component={Link} to="/shop">
            Return to shop
          </Button>
        </Box>
      ) : (
        <TableContainer sx={{ display: "flex" }}>
          <CartListTable cartList={cartItems} />
          <CartTotalTable total={cartSubtotal} />
        </TableContainer>
      )}
    </CartContainer>
  );
};

export default Cart;
