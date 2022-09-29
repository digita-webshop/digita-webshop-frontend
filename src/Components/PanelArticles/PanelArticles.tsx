import ContentHeader from "../PanelProducts/ContentHeader/ContentHeader";
import PanelPagination from "../PanelPagination/PanelPagination";
import { useState } from "react";
import { Grid, SelectChangeEvent, Divider, Box } from "@mui/material";
import { DashWrapper, paginationStyle } from "../../Styles/PanelProducts";
import Article from "./Article/Article";
import { ArticleWrapper } from "../../Styles/Articles";
import {
  useDeleteArticleMutation,
  useGetAllArticlesQuery,
} from "../../features/articles/articlesApi";
import NotFound from "../EmptyList/NotFound";
import {
  errorMessage,
  successMessage,
} from "../../Services/Utils/toastMessages";
import { ErrorText } from "../../Styles/panelCommon";
import PanelLoading from "../Loading/PanelLoading";
import GridHeader from "../PanelProducts/GridHeader/GridHeader";

const Articles = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(8);

  let queries: any = `page=${currentPage}&limit=${articlesPerPage} &search=${searchValue}`;

  if (selectedCategory) {
    queries = `${queries} &category=${selectedCategory.replaceAll("&", "%26")}`;
  }
  const {
    data: articlesData,
    isLoading,
    isError,
  } = useGetAllArticlesQuery(queries);
  const articles = articlesData?.data ?? [];
  const articlesLength = articlesData?.total ?? 0;

  const [deleteArticle] = useDeleteArticleMutation();

  const selectedCategoryHandler = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  async function handleRemove(id: string) {
    try {
      const response = await deleteArticle(id).unwrap();
      successMessage(response?.message);
    } catch (err: any) {
      errorMessage(err?.message);
    }
  }

  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <ContentHeader title="Articles" />
      </Grid>

      <Grid item xs={12}>
        <DashWrapper
          sx={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}
        >
          <GridHeader
            selectedCategory={selectedCategory}
            selectedCategoryHandler={selectedCategoryHandler}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </DashWrapper>
        <Divider
          sx={{ borderColor: "common.panelBorderGrey", opacity: ".1" }}
        />
        <ArticleWrapper sx={{ position: "relative" }}>
          <Grid container spacing={2}>
            {isLoading && <PanelLoading />}
            {isError && <ErrorText>ERROR:Could not retrieve data!</ErrorText>}
            {articles.length === 0 && !isLoading && !isError && <NotFound />}
            {articles &&
              articles.map(
                ({ _id, title, image, writer, createdAt, category }) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={_id}>
                    <Article
                      id={_id!}
                      title={title}
                      image={image}
                      writer={writer}
                      createdAt={createdAt}
                      category={category}
                      onRemove={handleRemove}
                    />
                  </Grid>
                )
              )}
          </Grid>
          <Box sx={paginationStyle}>
            <PanelPagination
              productsPerPage={articlesPerPage}
              totalProducts={articlesLength}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Box>
        </ArticleWrapper>
      </Grid>
    </Grid>
  );
};

export default Articles;
