import { useState } from "react";
import Modal from "@mui/material/Modal";
import CartModal from "../../../Products/Components/Modals/CartModal/CartModal";
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
  starLink,
  productButtonStyles,
} from "../../../../Styles/Product/index";
import { FavoriteBorder, Shuffle } from "@mui/icons-material";
import Gallery from "./Gallery/Gallery";
import ColorPicker from "./ColorPicker/ColorPicker";

interface Props {
  product: any;
}
const ProductDetails = ({ product }: Props) => {
  const [openAddToCart, setOpenAddToCart] = useState(false);
  const handleCloseAddToCart = () => setOpenAddToCart(false);

  const { name, price, image, starRate, sku, colors, description, gallery } =
    product;

  return (
    <Box my={5}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Gallery gallery={gallery} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "relative", overflow: "hidden" }}>
            <Box sx={{ position: "absolute", zIndex: "11111" }}>
              <div id="myPortal" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4" sx={productTitle}>
                {name}
              </Typography>
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

            <ColorPicker colors={colors} />
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
                  <CartModal price={price} />
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
