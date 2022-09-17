import {
  Grid,
  Rating,
  Typography,
  CardMedia,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { itemContent } from "../../../../Styles/Special";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  image: string;
  offPrice: number | null;
  price: number;
  rating: number;
};

const SpecialItem = ({ id, title, image, offPrice, price, rating }: Props) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Box
        sx={{
          display: "flex",
          height: "150px",
          "& .image-link": {
            width: "40%",
          },
        }}
      >
        <Link to={`/product/${id}`} className="image-link">
          <CardMedia
            component="img"
            sx={{ height: "100%" }}
            image={`${image}`}
            alt="Live from space album cover"
          />
        </Link>
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
              value={rating}
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
              component={"div"}
              fontWeight={700}
              sx={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                a: {
                  textDecoration: "none",
                  color: "common.digitaBlack",
                },
              }}
            >
              <Link to={`/product/${id}`}>{title}</Link>
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
