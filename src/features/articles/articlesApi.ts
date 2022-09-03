import { api } from "../api";

export const articlesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllArticles: build.query<any, void>({
      query: () => "articles",
      providesTags: ["Article"],
    }),
    getArticle: build.query<any, string>({
      query: (id) => `articles/find/${id}`,
      providesTags: ["Article"],
    }),
    addArticle: build.mutation<any, any>({
      query(body) {
        return {
          url: "articles",
          method: "POST",
          body,
        };
      },
    }),
    updateArticle: build.mutation<any, any>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: "articles",
          method: "PUT",
          body,
        };
      },
    }),
    deleteArticle: build.mutation<any, string>({
      query(id) {
        return {
          url: `articles/${id}`,
          method: "DELETE",
        };
      },
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
