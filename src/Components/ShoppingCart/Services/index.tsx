import React from "react";
import store from "../../../store";
import {removeFromCart} from "../../../features/cart/cartSlice";

export const handleRowDelete = (index: number) => {
    store.dispatch(removeFromCart(index));
}
