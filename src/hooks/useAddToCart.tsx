import { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../redux/store";
import { IProduct } from "../types/product";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cart/cartSlice";
import { useAddToCartMutation } from "../redux/cart/cartApi";

export function useAddToCart(inCart: boolean, product: IProduct, setOpenCart: Dispatch<SetStateAction<boolean>>) {
  const { user } = useAppSelector((state) => state.reducer.auth);

  const [addToCart, { isLoading: cartIsLoading }] = useAddToCartMutation();

  const dispatch = useDispatch();

  const addToCartHandler = async () => {
    if (inCart) return;
    const cartItem: any = {
      productId: product,
      name: product.title,
      price: product.price,
      quantity: 1,
    };
    if (user) {
      try {
        const res = await addToCart(cartItem).unwrap();
        console.log(res);
        setOpenCart(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      cartItem["_id"] = uuidv4();
      dispatch(addProductToCart(cartItem));
      setOpenCart(true);
    }
  };
  return { addToCartHandler, cartIsLoading };
}
