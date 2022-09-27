import { api } from "../api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.mutation<any, string>({
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
  }),
});

export const { useGetUserMutation, useUpdateUserMutation } = userApi;
