import { Fragment, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Container, useMediaQuery, Grid, Fade, Box } from "@mui/material";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";
import ColorFilter from "./ColorFilter/ColorFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import FiltersDrawer from "./FiltersDrawer/FiltersDrawer";
import Toolbar from "./Toolbar/Toolbar";
import ProductItem from "../Products/Components/ProductItem/ProductItem";
import Pagination from "../Pagination/Pagination";
import { productData } from "../../Services/Utils/Data/data";
import { useLocation, useSearchParams } from "react-router-dom";

function Shop() {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [products] = useState(productData);
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const queryParams = new URLSearchParams(search);
  let categoryQueryParams = queryParams.get("category");

  if (categoryQueryParams) {
    const selectedCategories = categoryQueryParams.split("/");

    currentProducts = currentProducts.filter((item) =>
      selectedCategories.some((cat) => item.category === cat)
    );
  }

  const toggleDrawer = (open: boolean) => {
    setDisplayDrawer(open);
  };

  const selectCategoryHandler = (name: string) => () => {
    let firstCatParams = categoryQueryParams?.split("/").length === 2;

    if (categoryQueryParams?.includes(name) && !firstCatParams) {
      searchParams.set(
        "category",
        `${categoryQueryParams.replace(`/${name}`, "")}`
      );
    } else if (categoryQueryParams?.includes(name) && firstCatParams) {
      searchParams.delete("category");
    } else {
      searchParams.set(
        "category",
        categoryQueryParams ? `${categoryQueryParams}/${name}` : `/${name}`
      );
    }
    setSearchParams(searchParams);
  };

  return (
    <Box bgcolor={"white"}>
      <Breadcrumbs title={"products"} />
      <Container sx={{ paddingY: "50px" }}>
        <Grid container columnSpacing={4}>
          {matches && (
            <Grid item xs={3.5}>
              <CategoriesFilter selectCategoryHandler={selectCategoryHandler} />
              <ColorFilter drawer={true} />
              <PriceFilter drawer={true} />
            </Grid>
          )}
          {!matches && (
            <FiltersDrawer
              displayDrawer={displayDrawer}
              toggleDrawer={toggleDrawer}
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
              {currentProducts.map((item) => (
                <Fragment key={item.id}>
                  {selectedLayout.grid && (
                    <Fade in={selectedLayout.grid}>
                      <Grid item xs={12} sm={4} md={4} key={item.id}>
                        <ProductItem
                          id={item.id}
                          name={item.name}
                          image={item.image}
                          offPrice={item.offPrice}
                          price={item.price}
                          sold={item.sold}
                          starRate={item.starRate}
                          description={item.description}
                          listView={false}
                        />
                      </Grid>
                    </Fade>
                  )}
                  {selectedLayout.list && (
                    <Fade in={selectedLayout.list}>
                      <Grid item xs={12}>
                        <ProductItem
                          id={item.id}
                          name={item.name}
                          image={item.image}
                          offPrice={item.offPrice}
                          price={item.price}
                          sold={item.sold}
                          starRate={item.starRate}
                          description={item.description}
                          listView={true}
                        />
                      </Grid>
                    </Fade>
                  )}
                </Fragment>
              ))}
            </Grid>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Shop;
