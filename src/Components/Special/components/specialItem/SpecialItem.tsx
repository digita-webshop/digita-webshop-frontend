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

const cardStyle = {
  display: "flex",
  width: "350px",
  height: "150px",
};

const contentStyle = {
  Button: {
    margin: "0.9rem 0",
  },
};

const SpecialItem = () => {
  return (
    <Grid item xs={8} sm={6} md={5} lg={4}>
      <Card sx={cardStyle}>
        <CardMedia
          component="img"
          sx={{ width: "40%", height: "100%" }}
          image="https://demo-61.woovinapro.com/wp-content/uploads/2018/09/product-14-330x330.jpg"
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #e8e8e8",
            borderLeft: "#fff",
            width: '250px'
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: "0.5rem 0 0 0.9rem",
            }}
          >
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
          <CardContent sx={contentStyle}>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              fontWeight={700}
            >
              Beats by the studio
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ margin: "0.2rem" }}
            >
              <Box component="span" sx={{ textDecoration: "line-through" }}>
                {`&77.00`}
              </Box>
              <Box component="span" sx={{ marginLeft: '5px',color: "red", fontWeight: "bold" }}>
                {`$77.00`}
              </Box>
            </Typography>
            <Button variant="contained">Add to cart</Button>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default SpecialItem;
