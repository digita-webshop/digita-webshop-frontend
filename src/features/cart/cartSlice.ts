import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../../Components/ShoppingCart/Types/CartItemType";
import { getSubtotal } from "../../Services/Utils/getSubtotal";

interface InitialStateProps {
  cartList: CartItem[];
  quantities: any;
  subtotal: number;
  total: number;
}

const initialState: InitialStateProps = {
  cartList: [],
  quantities: [],
  subtotal: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cartList = action.payload;
    },
    addProductToCart(state, action: { payload: CartItem }) {
      let cartItem = action.payload;
      let isInCart = state.cartList.some(
        (item) => item?.productId._id === cartItem?.productId._id
      );

      if (!isInCart) {
        state.cartList.push(cartItem);
      } else if (isInCart) {
        let cartItemIndex = state.cartList.findIndex(
          (item) => item?.productId._id === cartItem?.productId._id
        );
        state.cartList[cartItemIndex].quantity += cartItem.quantity;
      }
      state.subtotal = getSubtotal(state.cartList);
    },
    setQuantity(state, action) {
      state.quantities = action.payload;
    },
    removeFromCart(state, action) {
      state.cartList = state.cartList.filter(
        (item: CartItem) => item._id !== action.payload
      );
      state.quantities = state.cartList.filter(
        (item: CartItem) => item._id !== action.payload
      );
      state.subtotal = getSubtotal(state.cartList);
    },
  },
});

export const { setCart, setQuantity, removeFromCart, addProductToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
