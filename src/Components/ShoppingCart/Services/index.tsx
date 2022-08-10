import React from "react";
import store from "../../../store";
import {removeFromCart} from "../../../features/cart/cartSlice";

export const handleRowDelete = (index: number) => {
    // @ts-ignore todo fix me later
    store.dispatch(removeFromCart(index));
}
