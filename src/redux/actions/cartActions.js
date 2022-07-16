import {createAction} from "@reduxjs/toolkit";

export const setCart = createAction("cart/setCart")
export const setQuantity = createAction("cart/setQuantity")
export const removeFromCart = createAction("cart/removeFromCart")