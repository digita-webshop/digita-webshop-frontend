import { useState } from "react";
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
import { DeleteForever, FavoriteBorder, Shuffle } from "@mui/icons-material";
import Gallery from "./Gallery/Gallery";
import ColorPicker from "./ColorPicker/ColorPicker";
import { IProduct } from "../../../../Services/Types/product";
import { AmountBtn, CartInput } from "../../../../Styles/Products";

interface Props {
  product: IProduct;
}
const ProductDetails = ({ product }: Props) => {
  const {
    title,
    price,
    offPrice,
    rating,
    sku,
    colors,
    shortDescription,
    gallery,
  } = product;

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
                {title}
              </Typography>
            </Box>
            <Box sx={starLink}>
              <Rating
                title="read-only"
                defaultValue={rating}
                size="small"
                readOnly
                sx={starRating}
              />
              <Link className="customerReview">(1 customer review)</Link>
            </Box>
            <Box sx={filledPrice}>
              <bdi>{`$${offPrice ? offPrice : price}`}</bdi>
              {offPrice && (
                <Typography
                  component={"span"}
                  sx={{
                    position: "relative",
                    fontSize: "16px",
                    marginLeft: "14px",
                    "&:after": {
                      content: '" "',
                      position: "absolute",
                      top: "55%",
                      left: "0",
                      width: "100%",
                      height: "1.5px",
                      backgroundColor: "common.digitaBlack",
                    },
                  }}
                >{`$${price}`}</Typography>
              )}
            </Box>

            <Typography variant="body2" sx={ProductDetailsStyle} component="p">
              {shortDescription}
            </Typography>

            <ColorPicker colors={colors} />
            <Box>
              <Box sx={CartButtonsStyle}>
                <Button variant="contained" className="addCart">
                  Add To Cart
                </Button>
                {/* <Box
                  sx={{ display: "flex", alignItems: "center", height: "3rem" }}
                >
                  <AmountBtn width={"40px"}>-</AmountBtn>
                  <CartInput
                    id="outlined-number"
                    type="number"
                    sx={{
                      width: "40px",
                    }}
                    size="small"
                  />
                  <AmountBtn width={"40px"}>+</AmountBtn>
                </Box> */}
                {/* <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    padding: "0 20px!important",
                    "&:hover .delete-icon": { color: "#fff" },
                  }}
                >
                  <DeleteForever className="delete-icon" />
                </Button> */}

                {/* <Button variant="contained">View Cart</Button> */}
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
