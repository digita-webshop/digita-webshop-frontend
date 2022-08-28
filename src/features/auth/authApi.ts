import { api } from "../api";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, any>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signUp: build.mutation<any, any>({
      query: (credentials) => ({
        url: "auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
