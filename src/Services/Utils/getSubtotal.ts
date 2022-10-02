import CartItem from "../../Components/ShoppingCart/Types/CartItemType";

export const getSubtotal = (cartList: CartItem[]) => {
  return cartList?.reduce((acc: number, curr: CartItem) => {
    acc += curr.quantity * curr.price;
    return acc;
  }, 0);
};
