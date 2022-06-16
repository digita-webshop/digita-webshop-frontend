import { Box, Grid, Typography } from "@mui/material";
import { shopMenuItems } from "../../../../../Services/Utils/Data/data";
import { ShopSubTitle } from "../../../../../Styles/Appbar";

function ShopMenuCategories() {
  return (
    <Grid container>
      <Grid xs={6} paddingLeft={1}>
        <Typography
          textTransform={"uppercase"}
          color="primary"
          fontWeight={600}
        >
          new arrivals
        </Typography>
        <Box marginTop={2}>
          {shopMenuItems.map((item) => (
            <ShopSubTitle>{item.name}</ShopSubTitle>
          ))}
        </Box>
      </Grid>
      <Grid
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        paddingLeft={1}
      >
        <Box>
          <Typography
            textTransform={"uppercase"}
            color="primary"
            fontWeight={600}
          >
            weekly trend
          </Typography>
          <Box marginTop={2}>
            {shopMenuItems.slice(6, 9).map((item) => (
              <ShopSubTitle>{item.name}</ShopSubTitle>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography
            textTransform={"uppercase"}
            color="primary"
            fontWeight={600}
          >
            weekly trend
          </Typography>
          <Box marginTop={2}>
            {shopMenuItems.slice(6, 9).map((item) => (
              <ShopSubTitle>{item.name}</ShopSubTitle>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ShopMenuCategories;
