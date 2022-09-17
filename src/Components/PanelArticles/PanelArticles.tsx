import ContentHeader from "../PanelProducts/ContentHeader/ContentHeader";
import PanelPagination from "../PanelPagination/PanelPagination";
import { useState, useEffect } from "react";
import GridHeader from "./GridHeader/GridHeader";
import {
  Grid,
  SelectChangeEvent,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";
import { DashWrapper, paginationStyle } from "../../Styles/PanelProducts";
import Article from "./Article/Article";
import { ArticleWrapper } from "../../Styles/Articles";
import { IArticle } from "../../Services/Types/article";
import {
  useDeleteArticleMutation,
  useGetAllArticlesQuery,
} from "../../features/articles/articlesApi";
import NotFound from "../EmptyList/NotFound";
import {
  errorMessage,
  successMessage,
} from "../../Services/Utils/toastMessages";
import { ErrorText, PStack } from "../../Styles/panelCommon";

const Articles = () => {
  const [list, setList] = useState<IArticle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = list.slice(indexOfFirstProduct, indexOfLastProduct);

  const { data: articles, isLoading, isError } = useGetAllArticlesQuery();
  const [deleteArticle] = useDeleteArticleMutation();

  const [selectedStatus, setSelectedStatus] = useState("status");
  const [selectedAmount, setSelectedAmount] = useState("20");

  const selectedStatusHandler = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };
  const selectedAmountHandler = (event: SelectChangeEvent) => {
    setSelectedAmount(event.target.value);
  };

  async function handleRemove(id: string) {
    try {
      const response = await deleteArticle(id).unwrap();
      successMessage(response?.message);
    } catch (err: any) {
      errorMessage(err?.message);
    }
  }

  useEffect(() => {
    if (articles?.data) {
      setList(articles?.data);
    }
  }, [articles]);

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
            selectedStatus={selectedStatus}
            selectedAmount={selectedAmount}
            selectedStatusHandler={selectedStatusHandler}
            selectedAmountHandler={selectedAmountHandler}
          />
        </DashWrapper>
        <Divider
          sx={{ borderColor: "common.panelBorderGrey", opacity: ".1" }}
        />
        <ArticleWrapper sx={{ position: "relative" }}>
          <Grid container spacing={2}>
            {isLoading && (
              <PStack>
                <CircularProgress color="error" />
              </PStack>
            )}
            {isError && <ErrorText>ERROR:Could not retrieve data!</ErrorText>}
            {articles?.data.length === 0 && !isLoading ? (
              <NotFound />
            ) : (
              currentProducts.map(
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
              )
            )}
          </Grid>
          <Box sx={paginationStyle}>
            <PanelPagination
              productsPerPage={productsPerPage}
              totalProducts={list.length}
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
