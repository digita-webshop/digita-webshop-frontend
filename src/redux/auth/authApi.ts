import { IUser } from "../../types/user";
import { api } from "../api";

export interface UserRequest {
  email: string;
  userName?: string;
  password: string;
}
export interface LoginResponse {
  code: number;
  data: {
    details: IUser;
    role: string;
  };
  message: string;
}
export interface SignUpResponse {
  code: number;
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
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
