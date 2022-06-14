import { Box, List, Typography } from "@mui/material";
import { useState } from "react";
import { colorFilterData } from "../../Services/Utils/Data/data";
import { FilterTitleWrapper } from "../../Styles/ShopPage";
import ShopColorFilterCard from "./ShopColorFilterCard/ShopColorFilterCard";

function ShopColorFilter() {
  const [checked, setChecked] = useState([""]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Box
      sx={{ padding: "20px", border: "1px solid #e9e9e9", marginTop: "40px" }}
    >
      <FilterTitleWrapper>
        <Typography
          component={"h4"}
          variant="body1"
          color="primary"
          fontWeight={600}
        >
          COLOR
        </Typography>
      </FilterTitleWrapper>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          marginTop: "6px",
          marginLeft: "12px",
        }}
      >
        {colorFilterData.map(({ id, color }) => {
          const labelId = `checkbox-list-label-${id}`;
          const isChecked = checked.indexOf(color) !== -1;

          return (
            <ShopColorFilterCard
              isChecked={isChecked}
              labelId={labelId}
              color={color}
              handleToggle={handleToggle}
            />
          );
        })}
      </List>
    </Box>
  );
}

export default ShopColorFilter;