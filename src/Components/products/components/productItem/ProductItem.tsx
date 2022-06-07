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

const style = {
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
  padding: 2,
  Button: {
    width: "100%",
    display: "flex",
    padding: "1rem 0",
    textTransform: "uppercase",
  },
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

  //! Bug in here ======== this doesn't work
  const cardIconStyles = {
    opacity: "show ? 1 : 0",
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
                  <IconButton sx={{ color: "gray" }} aria-label="delete">
                    <ShoppingCartIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    sx={{ color: "gray" }}
                    aria-label="delete"
                    onClick={() => setOpenWish(true)}
                  >
                    <FavoriteBorderIcon fontSize="small" />
                  </IconButton>
                  <IconButton sx={{ color: "gray" }} aria-label="add an alarm">
                    <CompareArrowsIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    sx={{ color: "gray" }}
                    aria-label="add to shopping cart"
                    onClick={() => setOpenView(true)}
                  >
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </StyledIcons>
            )}
            {/* Product Item Icons */}
          </Box>

          {/* =========== Wishlist ======== */}

          <Modal
            open={openWish}
            onClose={handleWishList}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <FavoriteIcon sx={{ fontSize: 50, color: "#f03637" }} />
              <Typography id="modal-modal-title" variant="h5" component="h2">
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
            <Box sx={style}>
              <img src={image} alt="productImage" width="300" height="300"/>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {name}
              </Typography>
              <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
                <Box sx={{ color: '#777', marginLeft: '0.4rem'}}>(1 customer review)</Box>
              </Box>
              <Typography variant="h4">${price}</Typography>
              <Button variant="contained">Add to Cart</Button>
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
