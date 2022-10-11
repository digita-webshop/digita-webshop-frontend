import { Box, Card, CardMedia, Grid, Typography, useMediaQuery } from "@mui/material";
import { cardWrapper } from "styles/user";
import { titleStyle } from "../PanelProducts/styles";
import { Fragment } from "react";
import MyOrders from "./MyOrders/MyOrders";
import { useGetWishlistQuery } from "redux/wishlist/wishlistApi";
import { useAppSelector } from "redux/store";
import { useTheme } from "@mui/material/styles";
import PanelLoading from "../Loading/PanelLoading";
import { ErrorText } from "styles/panel";
import NotFound from "../EmptyList/NotFound";

const Status = () => {
  const { role } = useAppSelector((state) => state.reducer.auth);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const maxNum = matches ? 4 : 3;
  const { data: wishlistData, isLoading, isError } = useGetWishlistQuery(role!);
  const wishlist = wishlistData?.data ?? [];

  return (
    <Fragment>
      <MyOrders sidebar={false} />

      {/* ============== Recent Shops ============= */}

      <Box
        sx={{
          marginTop: "15px",
          border: "1px solid #d8d8d8",
          borderRadius: "12px",
          padding: "30px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>Latest Shops</Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {isLoading && <PanelLoading />}
            {isError && <ErrorText>ERROR:Could not retrieve data!</ErrorText>}
            {wishlist.length === 0 && !isLoading && !isError && <NotFound />}
            {wishlist?.length !== 0 &&
              wishlist.slice(0, maxNum).map((item) => (
                <Grid item xs={6} sm={4} lg={3} key={item._id}>
                  <Card sx={cardWrapper}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt="green iguana"
                      sx={{ aspectRatio: "1", objectFit: "contain" }}
                    />
                    <Box sx={{ m: "0 0.5rem" }}>
                      <Typography component="p" sx={titleStyle}>
                        {item.title}
                      </Typography>
                      <Typography variant="h6" component="div" sx={{ paddingY: "4px", fontSize: "15px" }}>
                        {"$" + item.price}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Status;
