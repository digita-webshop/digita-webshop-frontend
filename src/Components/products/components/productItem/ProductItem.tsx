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
  styled,
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
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

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
  position: "absolute",
  top: "85%",
  left: "50%",
  transform: "translate(-50%,-50%)",

  backgroundColor: "#E9E9E9",
  width: "150px",
  borderRadius: "7px",
}));

const defultStyle = {
  position: "relative",
};

/*  ============ Main Modal ========== */
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "80%",
  width: "70%",
  display: "flex",
  bgcolor: "background.paper",
  boxShadow: 24,
  Button: {
    width: "40%",
    display: "flex",
    padding: "0.8rem 0",
    textTransform: "uppercase",
  },
};

const modalImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
const modalLeft = {
  width: "50%",
  height: "70%",
};
const modalRight = {
  width: "50%",
  p: "2rem",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "scroll",
};

const label = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: 1,
  transition: "0.3s",
  p: {
    fontSize: "20px",
  },
  "&:hover": {
    color: "#f03637",
  },
};

/*  ============ Main Modal ========== */

/* ============= cart modal ================ */
const cartModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "450px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};
/* ============= cart modal ================ */

const wishListStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
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

  //! Bug in here ======== this doesn't work
  const cardIconStyles = {
    backgroundColor: "#fff",
    height: show ? "36px" : "0px",
    transition: "opacity 1s ease-in-out",
  };

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
          <Box sx={defultStyle}>
            <Div sx={{ fontSize: "12px" }}>{sold && "Sale!"}</Div>
            <CardMedia
              component="img"
              height="260"
              image={image}
              alt="green iguana"
            />

            {/* Product Item Icons */}
            {show && (
              <StyledIcons sx={cardIconStyles}>
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
            {/* Product Item Icons */}
          </Box>

          {/* ============= CART MODAL ============ */}

          <Modal
            open={openCart}
            onClose={() => setOpenCart(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={cartModal}>
              <CheckCircleRoundedIcon
                sx={{ fontSize: 110, fontWeight: 100, color: "#f03637", p: 2 }}
              />
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Item added to your cart
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="body2"
                component="h2"
                sx={{ margin: "0.8rem 0", color: "#777" }}
              >
                1 ITEMS IN THE CART (${price}00)
              </Typography>
              <Box sx={{ display: "flex", gap: 3, margin: "0.5rem 0" }}>
                <Button
                  variant="contained"
                  sx={{ p: "0.8rem 2.2rem", background: "#f03637" }}
                >
                  Continue Shopping
                </Button>
                <Button variant="contained" sx={{ p: "0.8rem 2.2rem" }}>
                   Go To The Cart  
                </Button>
              </Box>
              <Typography
                sx={{
                  display: "flex",
                  gap: 1,
                  color: "#777",
                  p: "1rem 0 0.3rem 0",
                }}
              >
                Buy for <Box sx={{ color: "red" }}>$448.00</Box> more and get
                free shipping
              </Typography>
            </Box>
          </Modal>
          {/* ============= CART Modal ============ */}

          {/* =========== Wishlist ======== */}

          <Modal
            open={openWish}
            onClose={handleWishList}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={wishListStyle}>
              {!addWish && (
                <FavoriteIcon sx={{ fontSize: 50, color: "#f03637" }} />
              )}
              <Typography
                id="modal-modal-title"
                variant="h5"
                component="h2"
                sx={{ margin: "0.8rem 0" }}
              >
                {addWish
                  ? "Product already in a Wishlist"
                  : "Product added to Wishlist"}
              </Typography>
              <Button variant="contained">
                <FavoriteBorderIcon sx={{ marginRight: "0.3rem" }} />
                View Wishlist
              </Button>
            </Box>
          </Modal>
          {/* =========== Wishlist ======== */}

          {/* ============ MODAL ============*/}
          <Modal
            open={openView}
            onClose={() => setOpenView(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Box sx={modalLeft}>
                <CardMedia
                  component="img"
                  height="260"
                  image={image}
                  alt="green iguana"
                  sx={modalImg}
                />
              </Box>
              <Box sx={modalRight}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: "500", color: "#444" }}
                >
                  {name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                  <Box
                    sx={{ color: "#777", margin: "0.6rem 0", fontSize: "13px" }}
                  >
                    (1 customer review)
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  <Typography variant="h4" sx={{ margin: "0.8rem 0" }}>
                    {`$${price}.00`}
                  </Typography>
                  <Box sx={{ textDecoration: "line-through", color: "#555" }}>
                    {offPrice !== 0 && `$${offPrice}.00`}
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ margin: "0.8rem 0", color: "#777" }}
                >
                  The slick and designed Solar t-shirt by romi. features an
                  intricate triangle print and tops stitched chest pocket in
                  contrast colouring.
                </Typography>

                <Typography
                  variant="body2"
                  component="p"
                  sx={{ margin: "0.8rem 0", color: "#777" }}
                >
                  The cotton blend t-shirt comes in a regular fit.Record
                  smoother, clearer videos. Local Heroes Transparent Heart Sweat
                </Typography>
                <Box
                  sx={{
                    p: "1rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box sx={{ display: "flex", height: "2rem" }}>
                    <Button variant="outlined" sx={{ fontSize: 20 }}>
                      +
                    </Button>
                    <Typography
                      variant="body2"
                      sx={{ border: "1px solid #444", padding: "1rem" }}
                    >
                      1
                    </Typography>
                    <Button variant="outlined" sx={{ fontSize: 20 }}>
                      -
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      display: "flex",
                      p: "1rem 0",
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
                <Box sx={label}>
                  <FavoriteBorderIcon fontSize="small" />
                  <p>Wishlist</p>
                </Box>
              </Box>
            </Box>
          </Modal>

          {/* ============ MODAL ============*/}

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
