import {createReducer} from '@reduxjs/toolkit'
import actions from '../actions';
import CartItem from "../../Components/ShoppingCart/Types/CartItemType";

const initState = {
    cartList: [],
    total: 0
};

const userReducer = createReducer(initState, (builder) => {
    builder.addCase(actions.cart.setCart as any, (state, action) => {
        return {
            ...state,
            cartList: action.payload
        }
    });
    builder.addCase(actions.cart.removeFromCart as any, (state, action) => {
        return {
            ...state,
            cartList: state.cartList.filter((item: CartItem) => item.id !== action.payload)
        }
    });
});

export default userReducer;