import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { FilterTitleWrapper, PriceSlider } from "../../Styles/ShopPage";

function ShopPriceFilter() {
  const [value, setValue] = useState<number[]>([10, 1000]);

  console.log(value);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <Box
      sx={{ padding: "20px", border: "1px solid #e9e9e9", marginTop: "50px" }}
    >
      <FilterTitleWrapper>
        <Typography
          component={"h4"}
          variant="body1"
          color="primary"
          fontWeight={600}
        >
          PRICE
        </Typography>
      </FilterTitleWrapper>
      <Box marginTop={2} marginBottom={1}>
        <PriceSlider
          getAriaLabel={() => "price range"}
          value={value}
          min={0}
          step={10}
          max={1000}
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body2"
          color="primary"
        >{`Price : $${value[0]} — $${value[1]}`}</Typography>
        <Button variant="contained" sx={{ paddingY: "4px" }}>
          Filter
        </Button>
      </Box>
    </Box>
  );
}

export default ShopPriceFilter;
