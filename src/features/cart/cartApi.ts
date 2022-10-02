import { api } from "../api";
import CartItem from "../../Components/ShoppingCart/Types/CartItemType";
import { IProduct } from "../../Services/Types/product";
import { ICartItem } from "../../Services/Types/cart";

export type GetAllCartItemsResponse = {
  code: number;
  message: string;
  data: {
    createdAt: string;
    updatedAt: string;
    userId: string;
    products: CartItem[];
  };
};

type GetCartResponse = {
  code: number;
  message: string;
  data: IProduct;
};

export const cartApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCartItem: build.query<GetAllCartItemsResponse, void>({
      query: () => `cart`,
      providesTags: ["Cart"],
    }),
    addToCart: build.mutation<GetCartResponse, ICartItem>({
      query(body) {
        return {
          url: `cart`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const { useGetAllCartItemQuery, useAddToCartMutation } = cartApi;
