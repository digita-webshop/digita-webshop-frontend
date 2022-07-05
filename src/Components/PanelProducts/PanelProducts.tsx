import { useState } from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import GridHeader from "./GridHeader/GridHeader";
import { Grid, SelectChangeEvent, Divider } from "@mui/material";
import { DashWrapper } from "../../Styles/PanelProducts";
import Product from "./Product/Product";
import { panelProducts } from "../../Services/Utils/Data/data";

const PanelProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(4);
  const paginationNumbers = Math.ceil(FormData.length / productPerPage);
  const indexOfLastContact = currentPage * productPerPage;
  const indexOfFirstContact = indexOfLastContact - productPerPage;

  const [selectedStatus, setSelectedStatus] = useState("status");
  const [selectedAmount, setSelectedAmount] = useState("20");

  const selectedStatusHandler = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };
  const selectedAmountHandler = (event: SelectChangeEvent) => {
    setSelectedAmount(event.target.value);
  };

  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
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
            {panelProducts.map(({id, name, price, image}) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={id}>
                <Product id={id} name={name} price={price} image={image}/>
              </Grid>
            ))}
          </Grid>
        </DashWrapper>
      </Grid>
    </Grid>
  );
};

export default PanelProducts;
