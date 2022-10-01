import { IProduct } from "./product";

export interface IAddress {
  _id?: string;
  country: string;
  state: string;
  city: string;
  street: string;
  postalCode: string;
}
export interface IOrder {
  _id?: string;
  products: string;
  status: "pending" | "delivered" | "cancelled";
  userId: string;
  createdAt?: string;
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
