import { Fragment, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Container,
  useMediaQuery,
  Grid,
  Fade,
  Box,
  Typography,
} from "@mui/material";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";
import ColorFilter from "./ColorFilter/ColorFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import FiltersDrawer from "./FiltersDrawer/FiltersDrawer";
import Toolbar from "./Toolbar/Toolbar";
import ProductItem from "../Products/Components/ProductItem/ProductItem";
import Pagination from "../Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
import ProductPlaceholder from "../Placeholders/ProductPlaceholder";

function Shop() {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [productsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLayout, setSelectedLayout] = useState({
    grid: true,
    list: false,
  });
  let [searchParams, setSearchParams] = useSearchParams();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // let currentProducts = products;
  let queries: any = `page=${currentPage}&limit=${productsPerPage}`;

  let searchQueryParams = searchParams.get("search");
  if (searchQueryParams) {
    queries = `${queries} &search=${searchQueryParams}`;
  }

  let categoryQueryParams = searchParams.get("category");
  if (categoryQueryParams) {
    queries = `${queries} &category=${categoryQueryParams.replaceAll(
      "&",
      "%26"
    )}`;
  }

  let colorQueryParams = searchParams.get("color");
  if (colorQueryParams) {
    queries = `${queries} &color=${colorQueryParams}`;
  }

  let priceQueryParams = searchParams.get("priceRange");
  if (priceQueryParams) {
    queries = `${queries} &price=${priceQueryParams}`;
  }

  let sortQueryParams = searchParams.get("sort");
  if (sortQueryParams) {
    queries = `${queries} &sort=${sortQueryParams}`;
  }

  const toggleDrawer = (open: boolean) => {
    setDisplayDrawer(open);
  };

  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetAllProductsQuery(queries);
  console.log(productsData);
  const products = productsData?.data ?? [];

  const addQueryParams = (filter: string, name: string) => () => {
    let selectedQueryParams = searchParams.get(filter);
    let firstCatParams = selectedQueryParams?.split("/").length === 2;

    if (selectedQueryParams?.includes(name) && !firstCatParams) {
      searchParams.set(
        filter,
        `${selectedQueryParams.replace(`/${name}`, "")}`
      );
    } else if (selectedQueryParams?.includes(name) && firstCatParams) {
      searchParams.delete(filter);
    } else {
      searchParams.set(
        filter,
        selectedQueryParams ? `${selectedQueryParams}/${name}` : `/${name}`
      );
    }
    setSearchParams(searchParams);
    setCurrentPage(1);
  };

  return (
    <Box bgcolor={"white"}>
      <Breadcrumbs title={"products"} />
      <Container sx={{ paddingY: "50px" }}>
        <Grid container columnSpacing={4}>
          {matches && (
            <Grid item xs={3.5}>
              <CategoriesFilter
                addQueryParams={addQueryParams}
                categoryQueryParams={categoryQueryParams}
              />
              <ColorFilter drawer={true} addQueryParams={addQueryParams} />
              <PriceFilter drawer={true} />
            </Grid>
          )}
          {!matches && (
            <FiltersDrawer
              displayDrawer={displayDrawer}
              toggleDrawer={toggleDrawer}
              addQueryParams={addQueryParams}
            />
          )}
          <Grid item xs={12} md={8.5}>
            <Toolbar
              matches={matches}
              toggleDrawer={toggleDrawer}
              setSelectedLayout={setSelectedLayout}
              selectedLayout={selectedLayout}
            />
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {!isLoading && !isError
                ? products.map((item) => {
                    if (products.length === 0) {
                      return (
                        <Box sx={{ textAlign: "center", margin: "40px auto" }}>
                          <Typography
                            variant="h5"
                            sx={{ color: "common.digitaBlack" }}
                          >
                            No result found!
                          </Typography>
                        </Box>
                      );
                    }
                    return (
                      <Fragment key={item._id}>
                        {selectedLayout.grid && (
                          <Fade in={selectedLayout.grid}>
                            <Grid item xs={12} sm={4} key={item._id}>
                              <ProductItem
                                id={item._id!}
                                title={item.title}
                                image={item.image}
                                offPrice={item.offPrice}
                                price={item.price}
                                sold={false}
                                rating={item.rating!}
                                description={item.shortDescription}
                                listView={false}
                              />
                            </Grid>
                          </Fade>
                        )}
                        {selectedLayout.list && (
                          <Fade in={selectedLayout.list}>
                            <Grid item xs={12}>
                              <ProductItem
                                id={item._id!}
                                title={item.title}
                                image={item.image}
                                offPrice={item.offPrice}
                                price={item.price}
                                sold={false}
                                rating={item.rating!}
                                description={item.shortDescription}
                                listView={true}
                              />
                            </Grid>
                          </Fade>
                        )}
                      </Fragment>
                    );
                  })
                : Array(12)
                    .fill(null)
                    .map((item, index) => (
                      <Grid item xs={12} sm={4}>
                        {" "}
                        <ProductPlaceholder key={index} />
                      </Grid>
                    ))}
            </Grid>
            {products && (
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Shop;
