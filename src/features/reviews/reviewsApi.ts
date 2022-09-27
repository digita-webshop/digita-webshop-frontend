import { IReviews } from "../../Services/Types/product";
import { api } from "../api";
type GetReviewsResponse = {
  code: number;
  message: string;
  data: IReviews[];
  total: number;
};
type GetReviewResponse = {
  code: number;
  message: string;
  data: IReviews[];
};
type GetDeleteReviewResponse = {
  data?: {
    code: number;
    data: IReviews;
    message: string;
  };
  error?: {
    data: {
      message: string;
    };
    status: number;
  };
};
export const reviewsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllReviews: build.query<
      GetReviewsResponse,
      { path: string; queries: string }
    >({
      query: ({ path, queries }) => `${path}/reviews?${queries}`,
      providesTags: ["Product", "Article"],
    }),
    getReviews: build.query<GetReviewResponse, { id: string; path: string }>({
      query: ({ path, id }) => `${path}/reviews/${id}`,
      providesTags: ["Product", "Article"],
    }),
    addReview: build.mutation<any, any>({
      query(data) {
        const { id, path, review } = data;
        return { url: `${path}/reviews/${id}`, method: "POST", body: review };
      },
      invalidatesTags: ["Product", "Article"],
    }),
    deleteReview: build.mutation<any, any>({
      query(data) {
        const { id, rid, path } = data;
        return { url: `${path}/${id}/reviews/${rid}`, method: "DELETE" };
      },
      invalidatesTags: ["Product", "Article"],
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useGetReviewsQuery,
  useAddReviewMutation,
  useDeleteReviewMutation,
} = reviewsApi;
