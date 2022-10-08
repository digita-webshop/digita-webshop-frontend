import { api } from "../api";
import { IProduct } from "../../types/product";
import { ICartItem } from "../../types/cart";

export type GetAllCartItemsResponse = {
  code: number;
  message: string;
  data: {
    createdAt: string;
    updatedAt: string;
    userId: string;
    products: ICartItem[];
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
