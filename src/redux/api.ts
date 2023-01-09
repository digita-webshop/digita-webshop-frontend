import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://digita-api.iran.liara.run/api" }),
  tagTypes: [
    "Product",
    "Article",
    "Wishlist",
    "Cart",
    "User",
    "Users",
    "Orders",
  ],
  endpoints: () => ({}),
});
