import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Container, useMediaQuery, Grid, Fade, Box, Typography } from "@mui/material";
import { Breadcrumbs, Pagination } from "components";
import { CategoriesFilter, ColorFilter, FiltersDrawer, PriceFilter, Toolbar } from "components/Shop";
import ProductItem from "components/Home/Products/Components/ProductItem/ProductItem";
import { useLocation, useSearchParams } from "react-router-dom";
import { useGetAllProductsQuery } from "redux/products/productsApi";
import ProductPlaceholder from "components/Placeholders/ProductPlaceholder";
import { Helmet } from "react-helmet-async";

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
  const { search } = useLocation();

  let queries: any = `page=${currentPage}&limit=${productsPerPage}`;

  let searchQueryParams = searchParams.get("search");
  if (searchQueryParams) {
    queries = `${queries} &search=${searchQueryParams}`;
  }

  let categoryQueryParams = searchParams.get("category");
  if (categoryQueryParams) {
    queries = `${queries} &category=${categoryQueryParams.replaceAll("&", "%26")}`;
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

  const { data: productsData, isLoading, isError } = useGetAllProductsQuery(queries);
  const products = productsData?.data ?? [];
  const productsLength = productsData?.total ?? 0;

  const addQueryParams = (filter: string, name: string) => () => {
    let selectedQueryParams = searchParams.get(filter);
    let firstCatParams = selectedQueryParams?.split("/").length === 2;

    if (selectedQueryParams?.includes(name) && !firstCatParams) {
      searchParams.set(filter, `${selectedQueryParams.replace(`/${name}`, "")}`);
    } else if (selectedQueryParams?.includes(name) && firstCatParams) {
      searchParams.delete(filter);
    } else {
      searchParams.set(filter, selectedQueryParams ? `${selectedQueryParams}/${name}` : `/${name}`);
    }
    setSearchParams(searchParams, { replace: true });
    setCurrentPage(1);
  };

  useEffect(() => {
    window.scroll({
      top: 200,
      left: 0,
      behavior: "smooth",
    });
  }, [search]);

  return (
    <Box bgcolor={"white"}>
      <Helmet>
        <title>Shop | Purchase products at affordable price </title>
      </Helmet>
      <Breadcrumbs title={"products"} />
      <Container sx={{ paddingY: "50px" }}>
        <Grid container columnSpacing={4}>
          {matches && (
            <Grid item xs={3.5}>
              <CategoriesFilter addQueryParams={addQueryParams} categoryQueryParams={categoryQueryParams} />
              <ColorFilter drawer={true} addQueryParams={addQueryParams} />
              <PriceFilter drawer={true} />
            </Grid>
          )}
          {!matches && (
            <FiltersDrawer displayDrawer={displayDrawer} toggleDrawer={toggleDrawer} addQueryParams={addQueryParams} />
          )}
          <Grid item xs={12} md={8.5}>
            <Toolbar
              matches={matches}
              toggleDrawer={toggleDrawer}
              setSelectedLayout={setSelectedLayout}
              selectedLayout={selectedLayout}
              sortQueryParams={sortQueryParams}
            />
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {!isLoading && !isError
                ? products.map((product) => {
                    if (products.length === 0) {
                      return (
                        <Box sx={{ textAlign: "center", margin: "40px auto" }}>
                          <Typography variant="h5" sx={{ color: "common.digitaBlack" }}>
                            No result found!
                          </Typography>
                        </Box>
                      );
                    }
                    return (
                      <Fragment key={product._id}>
                        {selectedLayout.grid && (
                          <Fade in={selectedLayout.grid}>
                            <Grid item xs={12} sm={4} key={product._id}>
                              <ProductItem product={product} listView={false} />
                            </Grid>
                          </Fade>
                        )}
                        {selectedLayout.list && (
                          <Fade in={selectedLayout.list}>
                            <Grid item xs={12}>
                              <ProductItem product={product} listView={true} />
                            </Grid>
                          </Fade>
                        )}
                      </Fragment>
                    );
                  })
                : Array(12)
                    .fill(null)
                    .map((item, index) => (
                      <Grid item xs={12} sm={4} key={index}>
                        <ProductPlaceholder />
                      </Grid>
                    ))}
            </Grid>
            {products && (
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={productsLength}
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
