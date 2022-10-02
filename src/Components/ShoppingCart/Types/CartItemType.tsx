import { IProduct } from "../../../Services/Types/product";

type CartItem = {
  _id: string;
  productId: IProduct;
  name: string;
  price: number;
  quantity: number;
  total?: number;
};

export default CartItem;
