import { IProduct } from "../../types/product";
import { api } from "../api";
type WishlistResponse = {
  code: number;
  data: IProduct[] | null;
  message?: string;
};

export const wishlistApi = api.injectEndpoints({
  endpoints: (build) => ({
    getWishlist: build.query<WishlistResponse, string>({
      query(query) {
        const path = query === "superAdmin" ? "superAdmin" : `${query}s`;
        return {
          url: `${path}/wishlist`,
        };
      },
      providesTags: ["Wishlist"],
    }),
    addWish: build.mutation<WishlistResponse, { path: string; id: string | undefined }>({
      query(data) {
        const { path: query, id } = data;
        const path = query === "superAdmin" ? "superAdmin" : `${query}s`;

        return {
          url: `${path}/wish/${id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["Wishlist"],
    }),
    deleteWish: build.mutation<WishlistResponse, { path: string; id: string | undefined }>({
      query(query) {
        const { path, id } = query;
        return {
          url: `${path}s/wish/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const { useGetWishlistQuery, useAddWishMutation, useDeleteWishMutation } = wishlistApi;
