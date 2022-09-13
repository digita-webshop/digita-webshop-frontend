import { useState } from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import GridHeader from "./GridHeader/GridHeader";
import { Grid, SelectChangeEvent, Divider, Box } from "@mui/material";
import { DashWrapper, paginationStyle } from "../../Styles/PanelProducts";
import Product from "./Product/Product";
import { productData } from "../../Services/Utils/Data/data";
import PanelPagination from "../PanelPagination/PanelPagination";

const PanelProducts = () => {
  const [list, setList] = useState(productData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = list.slice(indexOfFirstProduct, indexOfLastProduct);

  const [selectedStatus, setSelectedStatus] = useState("status");
  const [selectedAmount, setSelectedAmount] = useState("20");

  const selectedStatusHandler = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };
  const selectedAmountHandler = (event: SelectChangeEvent) => {
    setSelectedAmount(event.target.value);
  };

  function handleRemove(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
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
            selectedStatus={selectedStatus}
            selectedAmount={selectedAmount}
            selectedStatusHandler={selectedStatusHandler}
            selectedAmountHandler={selectedAmountHandler}
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
            <PanelPagination
              productsPerPage={productsPerPage}
              totalProducts={list.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Box>
        </DashWrapper>
      </Grid>
    </Grid>
  );
};

export default PanelProducts;
