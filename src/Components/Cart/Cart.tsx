import { useState } from "react";
import { Box } from "@mui/material";
import DynamicButton from "./Components/DynamicButton/DynamicButton";
import CartListTable from "./Components/Tables/CartListTable";
import CartTotalTable from "./Components/Tables/CartTotalTable";
import CartUpdated, { UpdateType } from "./Components/CartUpdated/CartUpdated";

import { useAppSelector } from "../../store";
import { useGetAllCartItemQuery } from "../../features/cart/cartApi";
import { CartContainer, TableContainer } from "./styles";
import { getSubtotal } from "../../Services/Utils/getSubtotal";
import { ICartItem } from "../../Services/Types/cart";

export type UpdateCart = {
  item?: ICartItem;
  type?: UpdateType;
};

const Cart = () => {
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

export default Cart;
