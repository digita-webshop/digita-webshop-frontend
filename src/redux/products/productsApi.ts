import { IProduct, IReviews } from "../../types/product";
import { api } from "../api";
type GetAllProductsResponse = {
  code: number;
  message: string;
  data: IProduct[];
  total: number;
};
type GetProductReviewsResponse = {
  code: number;
  message: string;
  data: IReviews[];
  total: number;
};
type GetProductResponse = {
  code: number;
  message: string;
  data: IProduct;
};
type GetProductReviewResponse = {
  code: number;
  message: string;
  data: IReviews;
};
export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<GetAllProductsResponse, string | undefined>({
      query: (query) => `products?${query}`,
      providesTags: ["Product"],
    }),
    getProduct: build.query<GetProductResponse, string>({
      query: (id) => `products/find/${id}`,
      providesTags: ["Product"],
    }),
    updateProduct: build.mutation<GetProductResponse, IProduct>({
      query(data) {
        const { _id } = data;
        return {
          url: `products/${_id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Product"],
    }),
    deleteProduct: build.mutation<{ data: {}; message: string }, string>({
      query(id) {
        return {
          url: `products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Product"],
    }),
    addProduct: build.mutation<GetProductResponse, IProduct>({
      query(body) {
        return {
          url: `products`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    getProductReviews: build.query<GetProductReviewsResponse, void>({
      query: () => `products/reviews`,
      providesTags: ["Product"],
    }),
    getProductReview: build.query<GetProductReviewResponse, string>({
      query: (id) => `products/reviews/${id}`,
      providesTags: ["Product"],
    }),
    addProductReview: build.mutation<any, any>({
      query(data) {
        const { id, ...body } = data;
        return { url: `products/reviews/${id}`, method: "POST", body };
      },
      invalidatesTags: ["Product"],
    }),
    deleteProductReview: build.mutation<any, any>({
      query(data) {
        const { pid, uid } = data;
        return { url: `products/${pid}/reviews/${uid}`, method: "DELETE" };
      },
      invalidatesTags: ["Product"],
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
  useGetProductReviewQuery,
  useAddProductReviewMutation,
  useDeleteProductReviewMutation,
} = productApi;
