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
import { itemContent } from "../../../../Styles/Special";

type Props = {
  id: number;
  name: string;
  image: string;
  offPrice: number | null;
  price: number;
  starRate: number;
};

const SpecialItem = ({ id, name, image, offPrice, price, starRate }: Props) => {
  return (
    <Grid item xs={12} sm={6} lg={4} key={id}>
      <Box
        sx={{
          display: "flex",
          height: "150px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "40%", height: "100%" }}
          image={`${image}`}
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #e8e8e8",
            borderLeft: "#fff",
            width: "60%",
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
              value={starRate}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Box>
          <CardContent sx={itemContent}>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              fontWeight={700}
              sx={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ margin: "0.2rem" }}
            >
              <Box component="span" sx={{ textDecoration: "line-through" }}>
                {offPrice !== 0 && `$${offPrice}.00`}
              </Box>
              <Box
                component="span"
                sx={{ marginLeft: "5px", color: "red", fontWeight: "bold" }}
              >
                {`$${price}.00`}
              </Box>
            </Typography>
            <Button variant="contained">Add to cart</Button>
          </CardContent>
        </Box>
      </Box>
    </Grid>
  );
};
export default SpecialItem;
