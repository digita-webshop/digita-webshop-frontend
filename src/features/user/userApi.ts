import { IProduct } from "../../Services/Types/product";
import { api } from "../api";
type GetWishlistResponse = {
  code: number;
  data: IProduct[];
};
export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.mutation<any, any>({
      query(id) {
        return {
          url: `users/${id}`,
          method: "GET",
        };
      },
      invalidatesTags: ["User"],
    }),
    updateUser: build.mutation<any, any>({
      query(data) {
        const { path, id, user } = data;
        return {
          url: `${path}s/${id}`,
          method: "PUT",
          body: user,
        };
      },
      invalidatesTags: ["User"],
    }),
    deleteWish: build.mutation<any, any>({
      query(query) {
        const { path, id } = query;
        return {
          url: `${path}s/wish/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUserMutation, useUpdateUserMutation } = userApi;
