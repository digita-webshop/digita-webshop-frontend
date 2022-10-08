import {
  Box,
  Button,
  Typography,
  Rating,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import StarIcon from "@mui/icons-material/Star";
import {
  closeStyle,
  label,
  modalRight,
  modalLeft,
  modalStyle,
  StyledModal,
} from "../../../styles";
import { IGallery } from "@/types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { DeleteForever, Favorite, FavoriteBorder } from "@mui/icons-material";
import { productIconStyles } from "@/components/Product/styles";
import QuantityInput from "@/components/Cart/Components/QuantityInput/QuantityInput";
import { ICartItem } from "@/types/cart";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/cart/cartSlice";

type Props = {
  title: string;
  gallery: IGallery[];
  offPrice: number | null;
  price: number;
  rating: number;
  colors: string[];
  reviewsLen: number;
  wished: boolean;
  addWishLoading: boolean;
  delWishLoading: boolean;
  shortDescription: string;
  cartItem: ICartItem | undefined;
  addToCartHandler: () => void;
  wishlistHandler: () => void;
  setOpenView: Dispatch<SetStateAction<boolean>>;
};

const ModalView = ({
  title,
  gallery,
  price,
  offPrice,
  rating,
  colors,
  reviewsLen,
  wished,
  addWishLoading,
  delWishLoading,
  shortDescription,
  cartItem,
  addToCartHandler,
  wishlistHandler,
  setOpenView,
}: Props) => {
  const [color, setColor] = useState(colors[0]);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setColor(e.target.value);
  };
  const cartItemDeleteHandler = () => {
    dispatch(removeFromCart(cartItem?._id!));
  };

  return (
    <Box sx={modalStyle}>
      <StyledModal>
        <Box sx={modalLeft} className="box">
          <Swiper
            navigation
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
          >
            {gallery.map(({ image, _id }) => (
              <SwiperSlide key={_id}>
                <img src={image} className="img-box" alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box sx={modalRight} className="rightBox">
          <Box sx={closeStyle} onClick={() => setOpenView(false)}>
            <CloseRoundedIcon sx={{ fontSize: "30px" }} />
          </Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "500", color: "#444" }}
          >
            {title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Rating
              title="text-feedback"
              size="small"
              value={rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ color: "#777", margin: "0.6rem 0", fontSize: "13px" }}>
              {`(${reviewsLen} customer review)`}
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Typography variant="h4" sx={{ margin: "0.8rem 0" }}>
              {`$${price}`}
            </Typography>
            <Box sx={{ textDecoration: "line-through", color: "#555" }}>
              {offPrice !== 0 && `$${offPrice}`}
            </Box>
          </Box>
          <Typography
            variant="body2"
            component="p"
            sx={{
              margin: "0.8rem 0",
              color: "#777",
              display: { xs: "none", md: "block" },
            }}
          >
            {shortDescription}
          </Typography>

          <FormControl
            sx={{
              minWidth: "100%",
              display: { xs: "none", md: "inline-flex" },
            }}
            size="small"
          >
            <InputLabel id="demo-simple-select-helper-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={color}
              label="Age"
              onChange={handleChange}
            >
              {colors.map((color) => (
                <MenuItem value={color}>{color}</MenuItem>
              ))}
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>
          <Box
            sx={{
              p: "1rem 0",
              height: "45px",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {cartItem && (
              <>
                <QuantityInput cartItem={cartItem} />
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    padding: "0 20px!important",
                    width: "unset !important",
                    height: "100%",
                    "&:hover .delete-icon": { color: "#fff" },
                  }}
                  onClick={cartItemDeleteHandler}
                >
                  <DeleteForever className="delete-icon" />
                </Button>
              </>
            )}
            {!cartItem && (
              <Button
                variant="contained"
                sx={{ fontSize: "14px", height: "100%" }}
                onClick={addToCartHandler}
              >
                Add to Cart
              </Button>
            )}
          </Box>
          <Box sx={label}>
            <Typography
              className="wish"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                fontSize: "23px",
                color: wished ? "#f03637 !important" : "common.digitaBlack",
              }}
              onClick={wishlistHandler}
            >
              {wished ? (
                <Favorite
                  sx={{ color: "common.digitaRed", ...productIconStyles }}
                  className={
                    addWishLoading || delWishLoading ? "wishLoading" : ""
                  }
                />
              ) : (
                <FavoriteBorder
                  sx={productIconStyles}
                  className={
                    addWishLoading || delWishLoading ? "wishLoading" : ""
                  }
                />
              )}
              Wishlist
            </Typography>
          </Box>
        </Box>
      </StyledModal>
    </Box>
  );
};
export default ModalView;
