import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import ButtonOther from "./button/ButtonOther";

const OtherProducts = () => {
  return (
    <Grid container spacing={3} marginTop="3rem" marginBottom="3rem">
      <Grid item xs={8} md={6}>
        <Card
          sx={{
            minWidth: 450,
            height: 340,
            backgroundSize: "contain",
            background:
              "url(https://demo-61.woovinapro.com/wp-content/uploads/2022/04/banner1.jpg) no-repeat center",
          }}
        >
          <CardContent sx={{ padding: "2rem", width: "250px" }}>
            <Typography
              sx={{ fontSize: 20, textTransform: "uppercase" }}
              gutterBottom
            >
              Limited Edition
            </Typography>
            <Typography variant="h4" component="h3">
              Virtual Reality Glasses
            </Typography>
            <ButtonOther />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={8} md={6}>
        <Card
          sx={{
            minWidth: 450,
            height: 340,
            backgroundSize: "contain",
            backgroundClip: "fill",
            background:
              "url(https://demo-61.woovinapro.com/wp-content/uploads/2022/04/banner2.jpg) no-repeat center",
          }}
        >
          <CardContent sx={{ padding: "2rem", width: "250px" }}>
            <Typography
              sx={{ fontSize: 20, textTransform: "uppercase" }}
              gutterBottom
            >
              Collection SS21
            </Typography>
            <Typography variant="h4" component="h3">
              Put The World On Mute
            </Typography>
            <ButtonOther />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OtherProducts;
