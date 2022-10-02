import { ICartItem } from "../Services/Types/cart";

export const getSubtotal = (cartList: ICartItem[]) => {
  return cartList?.reduce((acc: number, curr: ICartItem) => {
    acc += curr.quantity * curr.price;
    return acc;
  }, 0);
};
