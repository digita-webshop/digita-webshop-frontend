import { IUser } from "../../Services/Utils/Types/user";
import { api } from "../api";

export interface UserRequest {
  email: string;
  userName?: string;
  password: string;
}
export interface LoginResponse {
  data: {
    details: IUser;
    role: string;
  };
  message: string;
}
export interface SignUpResponse {
  data: {
    email: string;
    userName: string;
    _id: string;
  };
  message: string;
}
const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, UserRequest>({
      query: (credentials) => ({
        url: "auth/login",
        method: "Post",
        body: credentials,
      }),
    }),
    signUp: build.mutation<SignUpResponse, UserRequest>({
      query: (credentials) => ({
        url: "auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    // getUser: build.mutation<any, any>({
    //   query: (id) => ({
    //     url: `users/${id}`,
    //     method: "POST",
    //   }),
    // }),
    getUser: build.mutation<any, string>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useGetUserMutation } =
  authApi;
