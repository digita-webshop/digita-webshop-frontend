import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { cardWrapper } from "../../../Styles/User";
import { productData } from "../../../Services/Utils/Data/data";
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
          }}
        >
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {productData.slice(0, 4).map((item: T) => (
              <Grid item xs={6} sm={3} key={item.id}>
                <Card sx={cardWrapper}>
                  <CardMedia
                    component="img"
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
                      sx={{ paddingY: "4px", fontSize: "15px" }}
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
