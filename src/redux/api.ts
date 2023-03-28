import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Product", "Article", "Wishlist", "Cart", "User", "Users", "Orders"],
  endpoints: () => ({}),
});
