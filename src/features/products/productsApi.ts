import { IProduct, IReviews } from "../../Services/Utils/Types/product";
import { api } from "../api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<IProduct[], void>({
      query: () => "products",
      providesTags: ["Product"],
    }),
    getProduct: build.query<IProduct, string>({
      query: (id) => `products/find/${id}`,
      providesTags: ["Product"],
    }),
    updateProduct: build.mutation<IProduct, any>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `products/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    deleteProduct: build.mutation<any, string>({
      query(id) {
        return {
          url: `products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Product"],
    }),
    addProduct: build.mutation<any, IProduct>({
      query(body) {
        return {
          url: `products/`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    getProductReviews: build.query<IReviews[], string>({
      query: (id) => `products/reviews/${id}`,
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useAddProductMutation,
  useGetProductReviewsQuery,
} = productApi;
