import { IArticle } from "../../Services/Types/article";
import { api } from "../api";
type GetAllArticlesResponse = {
  code: number;
  message: string;
  data: { articles: IArticle[]; length: number };
};
type ArticleResponse = {
  message: string;
  data: IArticle;
};
export const articlesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllArticles: build.query<GetAllArticlesResponse, void>({
      query: () => "articles",
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
  }),
});

export const {
  useGetAllArticlesQuery,
  useGetArticleQuery,
  useAddArticleMutation,
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} = articlesApi;
