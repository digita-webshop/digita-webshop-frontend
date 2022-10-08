import { IUser } from "../../types/user";
import { api } from "../api";

interface GetAllUsersResponse {
  code: number;
  message: string;
  data: IUser[];
  total: number;
}
type UserData = {
  userName: string;
  email: string;
  password?: string;
  _id?: string;
  phone?: string;
};
interface UserResponse {
  code: number;
  message: string;
  data: UserData;
}
interface GetUserResponse extends UserResponse {
  data: IUser;
}

interface UpdateUserRequest {
  path: string;
  id: string;
  user?: any;
}

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<GetAllUsersResponse, string>({
      query: (path) => `${path}s`,
      providesTags: ["Users"],
    }),
    getUser: build.mutation<GetUserResponse, string | null>({
      query: (id) => `users/${id}`,
      invalidatesTags: ["User"],
    }),
    updateUser: build.mutation<UserResponse, UpdateUserRequest>({
      query(data) {
        const { path: role, id, user } = data;
        const path = role === "user" ? "user" : "admin";
        return {
          url: `${path}s/${id}`,
          method: "PUT",
          body: user,
        };
      },
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation<UserResponse, UpdateUserRequest>({
      query(data) {
        const { path, id } = data;
        return {
          url: `${path}s/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Users", "User"],
    }),
    createAdmin: build.mutation<UserResponse, UserData>({
      query(body) {
        return {
          url: "admins",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Users", "User"],
    }),
  }),
});

export const {
  useGetUserMutation,
  useUpdateUserMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useCreateAdminMutation,
} = userApi;
