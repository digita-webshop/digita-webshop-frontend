import { IReviews } from "../../types/product";
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
type AddReviewResponse = {
  code: number;
  message: string;
  data: IReviews;
};

interface RequestData {
  id: string;
  path: string;
}
interface AddReviewRequest extends RequestData {
  review: IReviews;
}
interface DeleteReviewRequest extends RequestData {
  rid: string;
}
export const reviewsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllReviews: build.query<
      GetReviewsResponse,
      { path: string; queries: string }
    >({
      query: ({ path, queries }) => `${path}/reviews?${queries}`,
      providesTags: ["Product", "Article"],
    }),
    getReviews: build.query<GetReviewResponse, RequestData>({
      query: ({ path, id }) => `${path}/reviews/${id}`,
      providesTags: ["Product", "Article"],
    }),
    addReview: build.mutation<AddReviewResponse, AddReviewRequest>({
      query(data) {
        const { id, path, review } = data;
        return { url: `${path}/reviews/${id}`, method: "POST", body: review };
      },
      invalidatesTags: ["Product", "Article"],
    }),
    deleteReview: build.mutation<any, DeleteReviewRequest>({
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
