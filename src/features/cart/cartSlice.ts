import {createSlice} from "@reduxjs/toolkit";
import CartItem from "../../Components/ShoppingCart/Types/CartItemType";

const initialState = {
    cartList: [],
    quantities: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action) {
            state.cartList = action.payload
        },
        setQuantity(state, action) {
            state.quantities = action.payload
        },
        removeFromCart(state, action) {
            state.cartList = state.cartList.filter((item: CartItem) => item.id !== action.payload)
            state.quantities = state.cartList.filter((item: CartItem) => item.id !== action.payload)
        },
    },
})

export const {setCart, setQuantity, removeFromCart} = cartSlice.actions
export default cartSlice.reducer
