import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import CartModal from "../Modals/CartModal/CartModal";
import ModalView from "../Modals/ModalView/ModalView";
import { RedTooltip, StyledIcons } from "../../../../Styles/Products/index";
import CompareModal from "../../../CompareModal/CompareModal";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCompareList } from "../../../../features/compare/compareSlice";
import {
  useAddWishMutation,
  useDeleteWishMutation,
  useGetWishlistQuery,
} from "../../../../features/wishlist/wishlistApi";
import { useAppSelector } from "../../../../features/store";
import {
  CompareArrows,
  Favorite,
  FavoriteBorder,
  ShoppingCart,
  Visibility,
} from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import {
  productIconStyles,
  productIconWrapperStyles,
} from "../../../../Styles/Product";
import WishModal from "../Modals/WishModal/WishModal";
import { IProduct } from "../../../../Services/Types/product";
import {
  useAddToCartMutation,
  useGetAllCartItemQuery,
} from "../../../../features/cart/cartApi";
import DotSpinner from "../../../Loading/DotSpinner";
import { addProductToCart } from "../../../../features/cart/cartSlice";
import { isInList } from "../../../../Utils/isInList";

type Props = {
  product: IProduct;
  listView: boolean;
};

const ProductItem = ({ product, listView }: Props) => {
  const { role, user } = useAppSelector((state) => state.reducer.auth);
  const { cartList } = useAppSelector((state) => state.reducer.cart);

  const [openView, setOpenView] = useState(false);
  const [openWish, setOpenWish] = useState(false);
  const [addedWish, setAddedWish] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openCompareModal, setOpenCompareModal] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [addWish, { isLoading: addWishLoading }] = useAddWishMutation();
  const [deleteWish, { isLoading: delWishLoading }] = useDeleteWishMutation();
  const [addToCart, { isLoading: cartIsLoading }] = useAddToCartMutation();

  const { data: cartData } = useGetAllCartItemQuery();
  const cart = cartData?.data.products ?? [];
  const cartItems = user ? cart : cartList;
  const inCart = isInList(cartItems, product._id!);

  const { data: wishlistData } = useGetWishlistQuery(role!);
  const wishlist = wishlistData?.data ?? [];
  const wished = isInList(wishlist, product._id!);

  const { _id, title, price, offPrice, shortDescription, rating, image } =
    product;

  const compareClickHandler = () => {
    dispatch(addToCompareList(product));
    setOpenCompareModal(true);
  };

  const wishlistHandler = async () => {
    if (!user || !role) {
      searchParams.set("login", "open");
      setSearchParams(searchParams);
      return;
    }
    try {
      let response;
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
  const addToCartHandler = async () => {
    if (inCart) return;
    const cartItem: any = {
      productId: product,
      name: title,
      price,
      quantity: 1,
    };
    if (user) {
      try {
        const res = await addToCart(cartItem).unwrap();
        console.log(res);
        setOpenCart(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      cartItem["_id"] = uuidv4();
      dispatch(addProductToCart(cartItem));
      setOpenCart(true);
    }
  };
  return (
    <Card
      sx={{
        maxWidth: listView ? "none" : { xs: "unset", sm: "270px" },
        boxShadow: "5px 4px 10px 1px rgba(0,0,0,0.12)",

        "&:hover .icon-card": {
          transform: "translateX(-50%) scaleY(1)",
        },
        display: listView ? "flex" : "inherit",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ position: "relative", borderBottom: "2px solid #f2f2f3cc" }}>
        {/* <Div sx={{ fontSize: "12px" }}>{sold && "Sale!"}</Div> */}
        <Link to={`/product/${_id}`}>
          <CardMedia
            component="img"
            image={image}
            alt="green iguana"
            sx={{
              cursor: "pointer",
              height: {
                xs: "320px",
                sm: "220px",
                md: "260px",
              },
              width: listView
                ? { xs: "100%", sm: "220px", md: "260px" }
                : "none",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* ========= Product Item Icons ==========*/}
        <StyledIcons
          sx={{
            backgroundColor: "#fff",
            transform: "translateX(-50%)  scaleY(0)",
          }}
          className="icon-card"
        >
          <Stack direction="row">
            <RedTooltip title="Add To Cart " placement="top">
              <Box sx={productIconWrapperStyles} onClick={addToCartHandler}>
                {cartIsLoading && <DotSpinner />}
                {!cartIsLoading && (
                  <ShoppingCart
                    fontSize="small"
                    sx={{
                      color: inCart ? "common.digitaRed" : "gray",
                      margin: "auto",
                    }}
                  />
                )}
              </Box>
            </RedTooltip>
            <RedTooltip title="Wishlist " placement="top">
              <Box sx={productIconWrapperStyles} onClick={wishlistHandler}>
                {wished ? (
                  <Favorite
                    fontSize="small"
                    sx={{
                      ...productIconStyles,
                      margin: "auto",
                      color: "common.digitaRed",
                    }}
                    className={
                      addWishLoading || delWishLoading ? "wishLoading" : ""
                    }
                  />
                ) : (
                  <FavoriteBorder
                    fontSize="small"
                    sx={{ ...productIconStyles, margin: "auto" }}
                    className={
                      addWishLoading || delWishLoading ? "wishLoading" : ""
                    }
                  />
                )}
              </Box>
            </RedTooltip>
            <RedTooltip title="Compare" placement="top">
              <Box
                sx={productIconWrapperStyles}
                onClick={compareClickHandler}
                aria-label="add an alarm"
              >
                <CompareArrows fontSize="small" sx={{ margin: "auto" }} />
              </Box>
            </RedTooltip>
            <RedTooltip title="Quick View" placement="top">
              <Box
                sx={productIconWrapperStyles}
                onClick={() => setOpenView(true)}
              >
                <Visibility fontSize="small" sx={{ margin: "auto" }} />
              </Box>
            </RedTooltip>
          </Stack>
        </StyledIcons>
        {/* ========== Product Item Icons ========= */}
      </Box>

      {/* ============= CART MODAL ============ */}
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
      {/* ============= CART Modal ============ */}

      {/* =========== Wishlist Modal ======== */}
      <Modal
        open={openWish}
        onClose={() => setOpenWish(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <WishModal
            setOpenWish={setOpenWish}
            addedWish={addedWish}
            role={role}
          />
        </div>
      </Modal>
      {/* =========== Wishlist Modal ======== */}

      {/* ============ MODAL VIEW ============*/}
      <Modal
        open={openView}
        onClose={() => setOpenView(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <ModalView
            title={title}
            gallery={product?.gallery}
            rating={rating}
            price={price}
            offPrice={offPrice}
            handleClose={() => setOpenView(false)}
          />
        </div>
      </Modal>
      {/* ============ MODAL VIEW ============*/}
      {/* ============ COMPARE MODAL ============*/}
      <Modal
        open={openCompareModal}
        onClose={() => setOpenCompareModal(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div>
          <CompareModal setOpenCompareModal={setOpenCompareModal} />
        </div>
      </Modal>
      <CardContent>
        <Rating
          title="text-feedback"
          size="small"
          value={rating}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box
          sx={{ a: { textDecoration: "none", color: "common.digitaBlack" } }}
        >
          <Link to={`/product/${_id}`}>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              sx={{
                margin: "0.2rem",
                transition: "all 150ms ease-in",
                cursor: "pointer",
                "&:hover": { color: "#f03637" },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              fontWeight={500}
            >
              {title}
            </Typography>
          </Link>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ margin: "0.2rem" }}
        >
          {offPrice !== 0 && (
            <Box
              component="span"
              sx={{ marginRight: "0.5rem", textDecoration: "line-through" }}
            >
              {`$${offPrice}.00`}
            </Box>
          )}
          <Box component="span" sx={{ color: "red", fontWeight: "bold" }}>
            {`$${price}.00`}
          </Box>
        </Typography>
        {listView && (
          <Typography
            component={"p"}
            variant="body2"
            sx={{
              color: "#666666",
              marginTop: { xs: "15px", sm: "25px" },
              textAlign: "justify",
              WebkitLineClamp: { xs: 2, sm: "unset" },
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
            }}
          >
            {shortDescription}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
export default ProductItem;
