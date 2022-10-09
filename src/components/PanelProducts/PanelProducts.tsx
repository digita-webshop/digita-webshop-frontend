import { useState } from "react";
import ContentHeader from "./Components/ContentHeader/ContentHeader";
import GridHeader from "./Components/GridHeader/GridHeader";
import { Grid, SelectChangeEvent, Divider, Box } from "@mui/material";
import { DashWrapper, paginationStyle } from "./styles";
import Product from "./Components/Product/Product";
import PanelPagination from "../Pagination/PanelPagination";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../redux/products/productsApi";
import { errorMessage, successMessage } from "../../utils/toastMessages";
import NotFound from "../EmptyList/NotFound";
import { ErrorText } from "../../styles/panel";
import PanelLoading from "../Loading/PanelLoading";

const PanelProducts = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("latest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  let queries: any = `page=${currentPage}&limit=${productsPerPage} &search=${searchValue}`;

  if (selectedCategory) {
    queries = `${queries} &category=${selectedCategory.replaceAll("&", "%26")}`;
  }

  if (selectedSorting) {
    queries = `${queries} &sort=${selectedSorting}`;
  }

  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetAllProductsQuery(queries);
  const products = productsData?.data ?? [];
  const length = productsData?.total ?? 0;

  const [deleteProduct] = useDeleteProductMutation();

  const selectedSortingHandler = (event: SelectChangeEvent) => {
    setSelectedSorting(event.target.value);
  };
  const selectedCategoryHandler = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  async function handleRemove(id: string) {
    try {
      const response = await deleteProduct(id).unwrap();
      successMessage(response?.message);
    } catch (err: any) {
      errorMessage(err?.message);
    }
  }

  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <ContentHeader title="Products" />
      </Grid>

      <Grid item xs={12}>
        <DashWrapper
          sx={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}
        >
          <GridHeader
            selectedSorting={selectedSorting}
            selectedCategory={selectedCategory}
            selectedSortingHandler={selectedSortingHandler}
            selectedCategoryHandler={selectedCategoryHandler}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </DashWrapper>
        <Divider
          sx={{ borderColor: "common.panelBorderGrey", opacity: ".1" }}
        />
        <DashWrapper
          sx={{
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            overflow: "hidden",
          }}
        >
          <Grid container spacing={2}>
            {isLoading && <PanelLoading />}
            {isError && <ErrorText>ERROR:Could not retrieve data!</ErrorText>}
            {products?.length === 0 && !isLoading && !isError && <NotFound />}
            {products?.length !== 0 &&
              products.map(({ _id, title, price, image }) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={_id}>
                  <Product
                    id={_id!}
                    title={title}
                    price={price}
                    image={image}
                    onRemove={handleRemove}
                  />
                </Grid>
              ))}
          </Grid>
          {products && (
            <Box sx={paginationStyle}>
              <PanelPagination
                productsPerPage={productsPerPage}
                totalProducts={length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Box>
          )}
        </DashWrapper>
      </Grid>
    </Grid>
  );
};

export default PanelProducts;
