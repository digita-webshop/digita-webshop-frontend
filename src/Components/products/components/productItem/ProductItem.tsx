import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Rating,
    styled,
    Typography,
  } from "@mui/material";
  import Stack from "@mui/material/Stack";
  import IconButton from "@mui/material/IconButton";
  import StarIcon from "@mui/icons-material/Star";
  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
  import VisibilityIcon from "@mui/icons-material/Visibility";
  
  type Props = {
    name: string;
    id: number;
    image: string;
    offPrice: number | null;
    price: number;
    sold: boolean;
    starRate: number;
  };
  
  const StyledIcons = styled("div")(({ theme }) => ({
    margin: "0 auto",
    display: "block",
    backgroundColor: "#E9E9E9",
    width: "150px",
    borderRadius: "7px",
  }));
  
  const ProductItem = ({ name, id, image, offPrice, price, sold, starRate }: Props) => {
    return (
      <Card
        sx={{ maxWidth: 260, boxShadow: "5px 4px 10px 1px rgba(0,0,0,0.12)" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="green iguana"
          />
  
          {/* Product Item Icons */}
          <StyledIcons>
            <Stack direction="row">
              <IconButton sx={{ color: "gray" }} aria-label="delete">
                <ShoppingCartIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{ color: "gray" }} aria-label="delete" disabled>
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{ color: "gray" }} aria-label="add an alarm">
                <CompareArrowsIcon fontSize="small" />
              </IconButton>
              <IconButton
                sx={{ color: "gray" }}
                aria-label="add to shopping cart"
              >
                <VisibilityIcon fontSize="small" />
              </IconButton>
            </Stack>
          </StyledIcons>
  
          <CardContent>
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
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              sx={{ margin: "0.2rem" }}
              fontWeight={500}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ margin: "0.2rem" }}
            >
              <Box
                component="span"
                sx={{ marginRight: "0.5rem", textDecoration: "line-through" }}
              >
                {offPrice !== 0 && `$${offPrice}.00`}
              </Box>
              <Box component="span" sx={{ color: "red", fontWeight: "bold" }}>
                {`$${price}.00`}
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  
  export default ProductItem;
  