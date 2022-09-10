import { IProduct, IReviews } from "../../Services/Utils/Types/product";
import { api } from "../api";
type GetAllProductsResponse = {
  message: string;
  data: IProduct[];
};
type GetProductResponse = {
  message: string;
  data: IProduct;
};
export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<GetAllProductsResponse, void>({
      query: () => "products",
      providesTags: ["Product"],
    }),
    getProduct: build.query<GetProductResponse, string>({
      query: (id) => `products/find/${id}`,
      providesTags: ["Product"],
    }),
    updateProduct: build.mutation<IProduct, any>({
      query(data) {
        const { _id, ...body } = data;
        console.log(_id);

        return {
          url: `products/${_id}`,
          method: "PUT",
          body: data,
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
    addProduct: build.mutation<any, any>({
      query(body) {
        console.log(body);
        return {
          url: `products`,
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
