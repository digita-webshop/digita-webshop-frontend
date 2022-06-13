import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartModal from "../Modals/CartModal/CartModal";
import ModalView from "../Modals/ModalView/ModalView";
import { Div, StyledIcons, wishStyle } from "../../../../Styles/Products/index";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { closeStyle } from "../../../../Styles/Products";

type Props = {
  name: string;
  id: number;
  image: string;
  offPrice: number | null;
  price: number;
  sold: boolean;
  starRate: number;
};

const ProductItem = ({
  name,
  id,
  image,
  offPrice,
  price,
  sold,
  starRate,
}: Props) => {
  const [show, setShow] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openWish, setOpenWish] = useState(false);
  const [addWish, setAddWish] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleWishList = () => {
    setOpenWish(false);
    setTimeout(() => {
      setAddWish(true);
    }, 500);
  };

  return (
    <Grid item xs={6} sm={4} md={3} key={id}>
      <Card
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        sx={{ maxWidth: 270, boxShadow: "5px 4px 10px 1px rgba(0,0,0,0.12)" }}
      >
        <CardActionArea>
          <Box sx={{ position: "relative" }}>
            <Div sx={{ fontSize: "12px" }}>{sold && "Sale!"}</Div>
            <CardMedia
              component="img"
              height="260"
              image={image}
              alt="green iguana"
            />

            {/* ========= Product Item Icons ==========*/}
            {show && (
              <StyledIcons sx={{ backgroundColor: "#fff" }}>
                <Stack direction="row">
                  <IconButton
                    sx={{ color: "gray" }}
                    onClick={() => setOpenCart(true)}
                  >
                    <ShoppingCartIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    sx={{ color: "gray" }}
                    onClick={() => setOpenWish(true)}
                  >
                    <FavoriteBorderIcon fontSize="small" />
                  </IconButton>
                  <IconButton sx={{ color: "gray" }} aria-label="add an alarm">
                    <CompareArrowsIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    sx={{ color: "gray" }}
                    onClick={() => setOpenView(true)}
                  >
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </StyledIcons>
            )}
            {/* ========== Product Item Icons ========= */}
          </Box>

          {/* ============= CART MODAL ============ */}
          <Modal
            open={openCart}
            onClose={() => setOpenCart(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <CartModal price={price} />
          </Modal>
          {/* ============= CART Modal ============ */}

          {/* =========== Wishlist Modal ======== */}
          <Modal
            open={openWish}
            onClose={handleWishList}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={wishStyle}>
              <Box sx={closeStyle} onClick={handleWishList}>
                <CloseRoundedIcon fontSize="medium" />
              </Box>
              {!addWish && (
                <FavoriteIcon sx={{ fontSize: 50, color: "#f03637" }} />
              )}

              <Typography
                id="modal-modal-title"
                variant="h5"
                component="h2"
                sx={{ padding: "1.4rem 0" }}
              >
                {addWish
                  ? "Product already in Wishlist"
                  : "Product added to Wishlist"}
              </Typography>
              <Button
                variant="contained"
                sx={{ width: "100%", padding: "0.8rem 0" }}
              >
                <FavoriteBorderIcon sx={{ marginRight: "0.3rem" }} />
                View Wishlist
              </Button>
            </Box>
          </Modal>
          {/* =========== Wishlist Modal ======== */}

          {/* ============ MODAL VIEW ============*/}
          <Modal
            open={openView}
            onClose={() => setOpenView(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalView
              name={name}
              image={image}
              starRate={starRate}
              price={price}
              offPrice={offPrice}
              sold={sold}
              handleClose={() => setOpenView(false)}
            />
          </Modal>
          {/* ============ MODAL VIEW ============*/}
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
    </Grid>
  );
};
export default ProductItem;
