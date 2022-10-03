import { useState } from "react";
import {
  Grid,
  Button,
  Link,
  Divider,
  Box,
  Rating,
  Typography,
  Modal,
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
  productIconStyles,
} from "../../../../Styles/Product/index";
import {
  DeleteForever,
  Favorite,
  FavoriteBorder,
  Shuffle,
} from "@mui/icons-material";
import Gallery from "./Gallery/Gallery";
import ColorPicker from "./ColorPicker/ColorPicker";
import { IProduct } from "../../../../Services/Types/product";
import { AmountBtn, CartInput } from "../../../../Styles/Products";
import {
  Link as NavLink,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { useAppSelector } from "../../../../features/store";
import {
  useAddWishMutation,
  useDeleteWishMutation,
} from "../../../../features/wishlist/wishlistApi";
import WishModal from "../../../Products/Components/Modals/WishModal/WishModal";
import { useGetReviewsQuery } from "../../../../features/reviews/reviewsApi";

interface Props {
  product: IProduct;
  wished: boolean;
}
const ProductDetails = ({ product, wished }: Props) => {
  const [openWish, setOpenWish] = useState(false);
  const [addedWish, setAddedWish] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { role, user } = useAppSelector((state) => state.reducer.auth);

  const { pathname } = useLocation();

  const { data: reviewsData } = useGetReviewsQuery({
    path: "products",
    id: product._id!,
  });
  const reviewsLength = reviewsData?.data.length ?? 0;

  const [addWish, { isLoading: addLoading }] = useAddWishMutation();
  const [deleteWish, { isLoading: delLoading }] = useDeleteWishMutation();
  const {
    _id,
    title,
    price,
    offPrice,
    rating,
    sku,
    colors,
    shortDescription,
    gallery,
  } = product;

  const wishlistHandler = async () => {
    if (!user || !role) {
      searchParams.set("login", "open");
      setSearchParams(searchParams);
      return;
    }
    try {
      let response;
      console.log(wished);
      console.log({ path: role!, _id });
      if (!wished) {
        response = await addWish({ path: role!, id: _id }).unwrap();
        setAddedWish(true);
      } else {
        response = await deleteWish({ path: role!, id: _id }).unwrap();
        setAddedWish(false);
      }
      setOpenWish(true);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

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
              <NavLink
                to={`${pathname}?tab=reviews#reviews`}
                className="customerReview"
              >{`(${reviewsLength} customer ${
                reviewsLength > 1 ? "reviews" : "review"
              })`}</NavLink>
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
              <Link
                component="button"
                onClick={wishlistHandler}
                sx={{
                  color: wished ? "#f03637 !important" : "common.digitaBlack",
                }}
                className={addLoading || delLoading ? "wishLoading" : ""}
              >
                {wished ? (
                  <Favorite
                    sx={{ color: "common.digitaRed", ...productIconStyles }}
                    className={addLoading || delLoading ? "wishLoading" : ""}
                  />
                ) : (
                  <FavoriteBorder
                    sx={productIconStyles}
                    className={addLoading || delLoading ? "wishLoading" : ""}
                  />
                )}
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
      <Modal
        open={openWish}
        onClose={() => setOpenWish(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <WishModal
          setOpenWish={setOpenWish}
          addedWish={addedWish}
          role={role}
        />
      </Modal>
    </Box>
  );
};

export default ProductDetails;
