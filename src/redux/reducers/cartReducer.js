import {createReducer} from '@reduxjs/toolkit'

import actions from '../actions';

const initState = {
    cartList: [],
    total: 0
};

const userReducer = createReducer(initState, (builder) => {
    builder.addCase(actions.cart.setCart, (state, action) => {
        return {
            ...state,
            cartList: [...state.cartList, action.payload]
        }
    });
});

export default userReducer;