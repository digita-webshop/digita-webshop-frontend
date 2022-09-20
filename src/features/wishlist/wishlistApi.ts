import { IProduct } from "../../Services/Types/product";
import { api } from "../api";
type GetWishlistResponse = {
  code: number;
  data: IProduct[];
};
export const wishlistApi = api.injectEndpoints({
  endpoints: (build) => ({
    getWishlist: build.query<GetWishlistResponse, any>({
      query(query) {
        const path = query === "superAdmin" ? "superAdmin" : `${query}s`;
        return {
          url: `${path}/wishlist/get`,
        };
      },
      providesTags: ["Wishlist"],
    }),
    addWish: build.mutation<any, any>({
      query(data) {
        const { path, id } = data;
        return {
          url: `${path}s/wish/${id}`,
          method: "GET",
        };
      },
      invalidatesTags: ["Wishlist"],
    }),
    deleteWish: build.mutation<any, any>({
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

export const {
  useGetWishlistQuery,
  useAddWishMutation,
  useDeleteWishMutation,
} = wishlistApi;
