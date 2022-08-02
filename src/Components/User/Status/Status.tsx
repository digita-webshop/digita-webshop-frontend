import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { cardWrapper } from "../../../Styles/User";
import { recentShopItems } from "../../../Services/Utils/Data/data";
import { titleStyle } from "../../../Styles/PanelProducts";
import { Fragment } from "react";
import MyOrders from "./MyOrders/MyOrders";

interface T {
  id: number;
  image: string;
  name: string;
  price: number;
}

const Status = () => {
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
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          Latest Shops
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            overflowX: "scroll",
          }}
        >
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {recentShopItems.map((item: T) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item.id}>
                <Card sx={cardWrapper}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={item.image}
                    alt="green iguana"
                    sx={{ backgroundColor: "#f2f2f3cc", objectFit: "contain" }}
                  />
                  <Box sx={{ m: "0 0.5rem" }}>
                    <Typography component="p" sx={titleStyle}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ pt: "2px", fontSize: "16px" }}
                    >
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
