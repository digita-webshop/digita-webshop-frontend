import { store } from "../../../store";
import { removeFromCart } from "../../../features/cart/cartSlice";

export const handleRowDelete = (index: string) => {
  store.dispatch(removeFromCart(index));
};
