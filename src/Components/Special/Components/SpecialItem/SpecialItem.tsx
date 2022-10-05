import {
  Grid,
  Rating,
  Typography,
  CardMedia,
  CardContent,
  Box,
  Button,
  Modal,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { itemContent } from "../../../../Styles/Special";
import { Link } from "react-router-dom";
import { isInList } from "@/Utils/isInList";
import { ICartItem } from "@/Services/Types/cart";
import { IProduct } from "@/Services/Types/product";
import { useAddToCart } from "@/hooks/useAddToCart";
import { useState } from "react";
import CartModal from "@/Components/Products/Components/Modals/CartModal/CartModal";
import { ShoppingBasket } from "@mui/icons-material";
import DotSpinner from "@/Components/Loading/DotSpinner";

type Props = {
  product: IProduct;
  cartItems: ICartItem[];
};

const SpecialItem = ({ product, cartItems }: Props) => {
  const [openCart, setOpenCart] = useState(false);

  console.log(product);
  console.log(cartItems);
  const { _id, title, price, offPrice, rating, image } = product;

  const inCart = isInList(cartItems, _id!);

  const cartItem = cartItems.find((item) => item?.productId._id === _id);

  const { addToCartHandler, cartIsLoading } = useAddToCart(
    inCart,
    product,
    setOpenCart
  );

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Box
        sx={{
          display: "flex",
          height: "150px",
          "& .image-link": {
            width: "40%",
          },
        }}
      >
        <Link to={`/product/${_id}`} className="image-link">
          <CardMedia
            component="img"
            sx={{ height: "100%", objectFit: "contain" }}
            image={image}
            alt="Live from space album cover"
          />
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #e8e8e8",
            borderLeft: "#fff",
            width: "60%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: "0.5rem 0 0 0.9rem",
            }}
          >
            <Rating
              name="text-feedback"
              size="small"
              value={rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Box>
          <CardContent sx={itemContent}>
            <Typography
              gutterBottom
              variant="body2"
              component={"div"}
              fontWeight={700}
              sx={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                a: {
                  textDecoration: "none",
                  color: "common.digitaBlack",
                },
              }}
            >
              <Link to={`/product/${_id}`}>{title}</Link>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ margin: "0.2rem" }}
            >
              <Box component="span" sx={{ textDecoration: "line-through" }}>
                {offPrice !== 0 && `$${offPrice}.00`}
              </Box>
              <Box
                component="span"
                sx={{ marginLeft: "5px", color: "red", fontWeight: "bold" }}
              >
                {`$${price}.00`}
              </Box>
            </Typography>
            <Button
              variant="contained"
              onClick={addToCartHandler}
              sx={{ alignItems: "center", gap: "6px" }}
            >
              Add to cart
              {cartIsLoading && <DotSpinner color="white" />}
              {inCart && <ShoppingBasket fontSize="small" />}
            </Button>
          </CardContent>
        </Box>
      </Box>
      <Modal
        open={openCart}
        onClose={() => setOpenCart(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <CartModal cartItems={cartItems} setOpenCart={setOpenCart} />
        </div>
      </Modal>
    </Grid>
  );
};
export default SpecialItem;
