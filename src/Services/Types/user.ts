import { IProduct } from "./product";

export interface IAddress {
  country: string;
  state: string;
  city: string;
  street: string;
  postalCode: string;
}
export interface IOrder {
  productId: string;
  status: "pending" | "delivered" | "cancelled";
  userId: string;
}
export interface IUser {
  _id?: string;
  email: string;
  userName: string;
  phone?: string;
  image?: string;
  role?: string;
  createdAt: string;
  updatedAt: string;
  addresses: IAddress[];
  wishlist: IProduct[];
  orders: IOrder[];
}
