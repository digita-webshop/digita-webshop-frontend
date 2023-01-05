import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../../types/cart";
import { getSubtotal } from "../../utils/getSubtotal";

interface InitialStateProps {
  cartList: ICartItem[];
  subtotal: number;
}

const initialState: InitialStateProps = {
  cartList: [],
  subtotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action: { payload: ICartItem }) {
      let cartItem = action.payload;
      let isInCart = state.cartList.some((item) => item?.productId._id === cartItem?.productId._id);

      if (!isInCart) {
        state.cartList.push(cartItem);
      } else if (isInCart) {
        let cartItemIndex = state.cartList.findIndex((item) => item?.productId._id === cartItem?.productId._id);
        state.cartList[cartItemIndex].quantity += cartItem.quantity;
      }
      state.subtotal = getSubtotal(state.cartList);
    },

    updateCart(state, action) {
      let cartItem = action.payload;

      let cartItemIndex = state.cartList.findIndex((item) => item?.productId._id === cartItem?.productId._id);
      const cartList = [...state.cartList];
      cartList[cartItemIndex] = cartItem;
      state.cartList = cartList;
      state.subtotal = getSubtotal(state.cartList);
    },

    removeFromCart(state, action) {
      state.cartList = state.cartList.filter((item) => item._id !== action.payload);
      state.subtotal = getSubtotal(state.cartList);
    },
    removeAllCartItems(state) {
      state.cartList = [];
      state.subtotal = getSubtotal(state.cartList);
    },
  },
});

export const { removeFromCart, addProductToCart, updateCart, removeAllCartItems } = cartSlice.actions;
export default cartSlice.reducer;
