import React from "react";
import store from "../../../redux/store";
import actions from "../../../redux/actions";

export const handleRowDelete = (index: number) => {
    // @ts-ignore todo fix me later
    store.dispatch(actions.cart.removeFromCart(index));
}