import { useState } from "react";
import Modal from "@mui/material/Modal";
import AddToCartModal from "../Modals/AddToCartModal/AddToCartModal";
import {
  Grid,
  Button,
  Divider,
  Box,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import {
  CartButtonsStyle,
  ProductDetailsStyle,
  productTitle,
  starRating,
  productMetaStyle,
  linkStyle,
  filledPrice,
  nextButton,
  nextButtonStyle,
  starLink,
  productButtonStyles,
} from "../../../../Styles/Product/index";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
  Shuffle,
} from "@mui/icons-material";

interface Props {
  product: any;
}
const ProductDetails = ({ product }: Props) => {
  const [openAddToCart, setOpenAddToCart] = useState(false);
  const handleCloseAddToCart = () => setOpenAddToCart(false);

  const { name, price, image, starRate, sku, color, description } = product;

  return (
    <Box mt={5}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4" sx={productTitle}>
                {name}
              </Typography>
              <Box sx={nextButton}>
                <Box sx={nextButtonStyle} component="button">
                  <ArrowBackIos />
                </Box>
                <Box sx={nextButtonStyle} component="button">
                  <ArrowForwardIos />
                </Box>
              </Box>
            </Box>
            <Box sx={starLink}>
              <Rating
                name="read-only"
                defaultValue={starRate}
                size="small"
                readOnly
                sx={starRating}
              />
              <Link className="customerReview">(1 customer review)</Link>
            </Box>
            <Box sx={filledPrice}>
              <bdi>{`$${price}`}</bdi>
            </Box>

            <Typography variant="body2" sx={ProductDetailsStyle} component="p">
              {description}
            </Typography>

            <Box>
              <Box sx={CartButtonsStyle}>
                <Button
                  variant="contained"
                  className="addCart"
                  onClick={() => setOpenAddToCart(true)}
                >
                  Add To Cart
                </Button>
                <Modal
                  open={openAddToCart}
                  onClose={handleCloseAddToCart}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <AddToCartModal />
                </Modal>
                <Button variant="contained">View Cart</Button>
              </Box>
            </Box>

            <Box sx={productButtonStyles}>
              <Link component="button">
                <FavoriteBorder />
                Wishlist
              </Link>

              <Link component="button">
                <Shuffle />
                Compare
              </Link>
            </Box>
          </Box>
          <Divider sx={{ width: "100%" }} />
          <Box sx={productMetaStyle}>
            <Box>
              <Typography component="span" className="span">
                SKU : {sku}
              </Typography>
              <Typography component="span">{sku}</Typography>
            </Box>
            <Box>
              <Typography component="span" className="span">
                Category :
              </Typography>
              <Link sx={linkStyle}>{" Audio & Video Game"}</Link>
            </Box>
            <Box>
              <Typography component="span" className="span">
                Tags :
              </Typography>
              <Link sx={linkStyle}>{" Tag-02"}</Link>
              <Link sx={linkStyle}>{"  Tag-08"}</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;