import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../../Components/ShoppingCart/Types/CartItemType";
import { getSubtotal } from "../../Services/Utils/getSubtotal";

interface InitialStateProps {
  cartList: CartItem[];
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

    updateCart(state, action) {
      let cartItem = action.payload;

      let cartItemIndex = state.cartList.findIndex(
        (item) => item?.productId._id === cartItem?.productId._id
      );
      const cartList = [...state.cartList];
      cartList[cartItemIndex] = cartItem;
      state.cartList = cartList;
      state.subtotal = getSubtotal(state.cartList);
    },

    removeFromCart(state, action) {
      state.cartList = state.cartList.filter(
        (item: CartItem) => item._id !== action.payload
      );
      state.subtotal = getSubtotal(state.cartList);
    },
  },
});

export const { removeFromCart, addProductToCart, updateCart } =
  cartSlice.actions;
export default cartSlice.reducer;
