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

const Div = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  ...theme.typography.button,
  backgroundColor: theme.palette.error.main,
  padding: "0 5px",
  color: "#fff",
}));

const StyledIcons = styled("div")(({ theme }) => ({
  position: 'absolute',
  top: '85%',
  left: '50%',
  transform: 'translate(-50%,-50%)',

  backgroundColor: "#E9E9E9",
  width: "150px",
  borderRadius: "7px",
}));

const ProductItem = ({
  name,
  id,
  image,
  offPrice,
  price,
  sold,
  starRate,
}: Props) => {
  return (
    <Card
      sx={{ maxWidth: 270, boxShadow: "5px 4px 10px 1px rgba(0,0,0,0.12)" }}
    >
      <CardActionArea>
        <Box sx={{position: 'relative'}}>
          <Div sx={{ fontSize: "12px" }}>{sold && "Sale!"}</Div>
          <CardMedia
            component="img"
            height="260"
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
          {/* Product Item Icons */}
        </Box>

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
