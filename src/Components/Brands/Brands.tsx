import { Divider, Grid, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { DashWrapper } from "../../Styles/Dashboard";
import Brand from "./Brand/Brand";
import ContentHeader from "./ContentHeader/ContentHeader";
import TableHeader from "./TableHeader/TableHeader";
import { brands } from "../../Services/Utils/Data/data";

const Brands = () => {
  const [selectedStatus, setSelectedStatus] = useState("status20");
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
          <TableHeader
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
            {brands.map(({ id, name, image, count }) => (
              <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={id}>
                <Brand id={id} name={name} image={image} count={count} />
              </Grid>
            ))}
          </Grid>
        </DashWrapper>
      </Grid>
    </Grid>
  );
};

export default Brands;
