import CartItem from "../Types/CartItemType";
import React, {Dispatch} from "react";

export const handleRowDelete = (index: number, setCartList: Dispatch<React.SetStateAction<CartItem[]>>) => {
    setCartList(prevState => {
        return prevState.filter((item: CartItem) => item.id !== index)
    })
}