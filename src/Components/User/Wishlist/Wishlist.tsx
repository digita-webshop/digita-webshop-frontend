import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { wrapper } from "../../../Styles/User";
import { paginationStyle } from "../../../Styles/PanelProducts";
import Product from "./Product/Product";
import Pagination from "../../Pagination/Pagination";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useGetWishlistQuery } from "../../../features/wishlist/wishlistApi";
import { useAppSelector } from "../../../store";
import PanelLoading from "../../Loading/PanelLoading";
import { ErrorText } from "../../../Styles/panelCommon";
import NotFound from "../../EmptyList/NotFound";

const Wishlist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const { role } = useAppSelector((state) => state.reducer.auth);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const { data: wishlistData, isLoading, isError } = useGetWishlistQuery(role!);
  const wishlist = wishlistData?.data ?? [];

  return (
    <>
      <Box sx={wrapper}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box
            to="/user"
            component={Link}
            sx={{
              display: { md: "none" },
              textDecoration: "none",
              color: "common.digitaBlack",
            }}
          >
            <ArrowBack />
          </Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            Wishlist
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {isLoading && <PanelLoading />}

          {isError && <ErrorText>ERROR:Could not retrieve data!</ErrorText>}

          {wishlist.length === 0 && !isLoading && !isError && (
            <NotFound message="your wishlist is empty" />
          )}
          {wishlist.length !== 0 &&
            !isLoading &&
            !isError &&
            wishlist &&
            wishlist
              .slice(indexOfFirstProduct, indexOfLastProduct)
              .map(({ _id, title, price, image }) => (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={_id}>
                  <Product
                    id={_id!}
                    title={title}
                    price={price}
                    image={image}
                  />
                </Grid>
              ))}
        </Grid>

        <Box sx={paginationStyle}>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={wishlist.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Box>
      </Box>
    </>
  );
};

export default Wishlist;
