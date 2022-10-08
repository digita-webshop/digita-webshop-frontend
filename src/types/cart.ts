import { IProduct } from "./product";

export interface ICartItem {
  _id: string;
  productId: IProduct;
  name: string;
  price: number;
  quantity: number;
  total?: number;
}
