import { IArticle } from "../../types/article";
import { IReviews } from "../../types/product";
import { api } from "../api";
type GetAllArticlesResponse = {
  code: number;
  message: string;
  data: IArticle[];
  total: number;
};
type ArticleResponse = {
  message: string;
  data: IArticle;
};

type GetArticleReviewsResponse = {
  code: number;
  message: string;
  data: IReviews[];
  total: number;
};
type GetArticleReviewResponse = {
  code: number;
  message: string;
  data: IReviews;
};
export const articlesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllArticles: build.query<GetAllArticlesResponse, string>({
      query: (query) => `articles?${query}`,
      providesTags: ["Article"],
    }),
    getArticle: build.query<ArticleResponse, string>({
      query: (id) => `articles/find/${id}`,
      providesTags: ["Article"],
    }),
    addArticle: build.mutation<ArticleResponse, IArticle>({
      query(body) {
        return {
          url: "articles",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Article"],
    }),
    updateArticle: build.mutation<ArticleResponse, IArticle>({
      query(body) {
        const { _id } = body;
        return {
          url: `articles/${_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Article"],
    }),
    deleteArticle: build.mutation<{ data: {}; message: string }, string>({
      query(id) {
        return {
          url: `articles/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Article"],
    }),
    getArticleReviews: build.query<GetArticleReviewsResponse, void>({
      query: () => `articles/reviews`,
      providesTags: ["Article"],
    }),
    getArticleReview: build.query<GetArticleReviewResponse, string>({
      query: (id) => `articles/reviews/${id}`,
      providesTags: ["Article"],
    }),
    addArticleReview: build.mutation<any, any>({
      query(data) {
        const { id, ...body } = data;
        return { url: `articles/reviews/${id}`, method: "POST", body };
      },
      invalidatesTags: ["Article"],
    }),
    deleteArticleReview: build.mutation<any, any>({
      query(data) {
        const { aid, uid } = data;
        return { url: `articles/${aid}/reviews/${uid}`, method: "DELETE" };
      },
      invalidatesTags: ["Article"],
    }),
  }),
});

export const {
  useGetAllArticlesQuery,
  useGetArticleQuery,
  useAddArticleMutation,
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} = articlesApi;
