import React from "react";
import {
  Grid,
  Rating,
  Typography,
  CardMedia,
  CardContent,
  Box,
  Card,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const SpecialItem = () => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card sx={{ display: "flex", border: "1px solid red" }}>
        <Box>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%" }}
            image="https://demo-61.woovinapro.com/wp-content/uploads/2018/09/product-14-330x330.jpg"
            alt="Live from space album cover"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Rating
              name="text-feedback"
              size="small"
              value={5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              sx={{ margin: "0.2rem" }}
              fontWeight={500}
            >
              Beats by the studio
            </Typography>
            <Box
              component="span"
              sx={{ marginRight: "0.5rem", textDecoration: "line-through" }}
            >
              {`&77.00`}
            </Box>
            <Button variant="contained">Add to cart</Button>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default SpecialItem;
