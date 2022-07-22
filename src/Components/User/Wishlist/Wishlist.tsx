import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { wrapper } from "../../../Styles/User";
import { paginationStyle } from "../../../Styles/PanelProducts";
import Product from "./Product/Product";
import { userWishlistProducts } from "../../../Services/Utils/Data/data";
import Pagination from "../../Pagination/Pagination";
import EmptyList from "../../EmptyList/EmptyList";

const Wishlist = () => {
  const wish = 0;
  const [list, setList] = useState(userWishlistProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = list.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  function handleRemove(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <>
      <Box sx={wrapper}>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          Wishlist
        </Typography>

        {/* =========== If wishlist is empty render this ==========  */}
        {wish > 0 && (
          <EmptyList
            title={"Wishlist"}
            image={
              "https://www.digikala.com/statics/img/svg/favorites-list-empty.svg"
            }
          />
        )}

        <Grid container spacing={2}>
          {currentProducts.map(({ id, name, price, image }) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={id}>
              <Product
                id={id}
                name={name}
                price={price}
                image={image}
                onRemove={handleRemove}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={paginationStyle}>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={list.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Box>
      </Box>
    </>
  );
};

export default Wishlist;
