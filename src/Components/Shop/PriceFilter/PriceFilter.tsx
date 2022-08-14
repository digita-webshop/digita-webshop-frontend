import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterTitleWrapper, PriceSlider } from "../../../Styles/ShopPage";

interface Props {
  drawer: boolean;
}
function PriceFilter({ drawer }: Props) {
  const [value, setValue] = useState<number[]>([10, 1000]);
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const addPriceQueryParams = () => {
    searchParams.set("priceRange", `min=${value[0]}/max=${value[1]}`);
    setSearchParams(searchParams);
  };
  return (
    <Box
      sx={{
        padding: "20px",
        border: drawer ? "1px solid #e9e9e9" : "",
        marginTop: drawer ? "40px" : "20px",
      }}
    >
      <FilterTitleWrapper className={`${drawer && "underline"}`}>
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
        <Button
          variant="contained"
          sx={{ paddingY: "4px" }}
          onClick={addPriceQueryParams}
        >
          Filter
        </Button>
      </Box>
    </Box>
  );
}

export default PriceFilter;
