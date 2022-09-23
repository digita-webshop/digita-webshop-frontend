import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartModal from "../Modals/CartModal/CartModal";
import ModalView from "../Modals/ModalView/ModalView";
import {
  Div,
  RedTooltip,
  StyledIcons,
  wishStyle,
} from "../../../../Styles/Products/index";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { closeStyle } from "../../../../Styles/Products";
import CompareModal from "../../../CompareModal/CompareModal";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCompareList } from "../../../../features/compare/compareSlice";
import {
  useAddWishMutation,
  useDeleteWishMutation,
} from "../../../../features/wishlist/wishlistApi";
import { useAppSelector } from "../../../../store";
import { Favorite } from "@mui/icons-material";
import {
  productIconStyles,
  productIconWrapperStyles,
} from "../../../../Styles/Product";
import WishModal from "../Modals/WishModal/WishModal";

type Props = {
  title: string;
  id: string;
  image: string;
  offPrice: number | null;
  price: number;
  sold: boolean;
  rating: number;
  description: string;
  listView: boolean;
  wished: boolean;
};

const ProductItem = ({
  title,
  id,
  image,
  offPrice,
  price,
  sold,
  rating,
  description,
  listView,
  wished,
}: Props) => {
  const [openView, setOpenView] = useState(false);
  const [openWish, setOpenWish] = useState(false);
  const [addedWish, setAddedWish] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openCompareModal, setOpenCompareModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { role, user } = useAppSelector((state) => state.reducer.auth);

  const [addWish, { isLoading: addLoading }] = useAddWishMutation();
  const [deleteWish, { isLoading: delLoading }] = useDeleteWishMutation();

  const compareClickHandler = () => {
    dispatch(addToCompareList(id));
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
        response = await addWish({ path: role!, id }).unwrap();
        setAddedWish(true);
      } else {
        response = await deleteWish({ path: role!, id }).unwrap();
        setAddedWish(false);
      }
      setOpenWish(true);
      console.log(response);
    } catch (err) {
      console.log(err);
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
        <Div sx={{ fontSize: "12px" }}>{sold && "Sale!"}</Div>
        <Link to={`/product/${id}`}>
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
              <Box sx={productIconStyles} onClick={() => setOpenCart(true)}>
                <ShoppingCartIcon fontSize="small" sx={{ margin: "auto" }} />
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
                    className={addLoading || delLoading ? "wishLoading" : ""}
                  />
                ) : (
                  <FavoriteBorderIcon
                    fontSize="small"
                    sx={{ ...productIconStyles, margin: "auto" }}
                    className={addLoading || delLoading ? "wishLoading" : ""}
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
                <CompareArrowsIcon fontSize="small" sx={{ margin: "auto" }} />
              </Box>
            </RedTooltip>
            <RedTooltip title="Quick View" placement="top">
              <Box
                sx={productIconWrapperStyles}
                onClick={() => setOpenView(true)}
              >
                <VisibilityIcon fontSize="small" sx={{ margin: "auto" }} />
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
          <CartModal price={price} />
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
        <WishModal
          setOpenWish={setOpenWish}
          addedWish={addedWish}
          role={role}
        />
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
            image={image}
            rating={rating}
            price={price}
            offPrice={offPrice}
            sold={sold}
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
          <Link to={`/product/${id}`}>
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
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
export default ProductItem;
