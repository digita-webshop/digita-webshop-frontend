import { useState } from "react";
import { Box } from "@mui/material";
import DynamicButton from "./DynamicButton/DynamicButton";
import CartListTable from "./Tables/CartListTable";
import CartTotalTable from "./Tables/CartTotalTable";
import CartUpdated, { UpdateType } from "./CartUpdated";
import CartItem from "./Types/CartItemType";

import { useAppSelector } from "../../store";
import { useGetAllCartItemQuery } from "../../features/cart/cartApi";
import { CartContainer, TableContainer } from "./styles";
import { getSubtotal } from "../../Services/Utils/getSubtotal";

export type UpdateCart = {
  item?: CartItem;
  type?: UpdateType;
};

const ShoppingCart = () => {
  const { user } = useAppSelector((state) => state.reducer.auth);
  const { cartList, subtotal } = useAppSelector((state) => state.reducer.cart);

  const [cartUpdated, setCartUpdated] = useState<UpdateCart | null>(null);

  const { data: cartData } = useGetAllCartItemQuery();
  const cart = cartData?.data.products ?? [];
  const cartItems = user ? cart : cartList;

  let cartSubtotal = subtotal;
  if (user) {
    cartSubtotal = getSubtotal(cartItems);
  }

  return (
    <CartContainer>
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
          <CartListTable cartList={cartItems} />
          <CartTotalTable total={cartSubtotal} />
        </TableContainer>
      )}
    </CartContainer>
  );
};

export default ShoppingCart;
