import { useState } from "react";
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

type Props = {
  name: string;
  id: number;
  image: string;
  offPrice: number | null;
  price: number;
  sold: boolean;
  starRate: number;
  description: string;
  listView: boolean;
};

const ProductItem = ({
  name,
  id,
  image,
  offPrice,
  price,
  sold,
  starRate,
  description,
  listView,
}: Props) => {
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
    <Card
      sx={{
        maxWidth: listView ? "none" : 270,
        boxShadow: "5px 4px 10px 1px rgba(0,0,0,0.12)",
        cursor: "pointer",
        "&:hover .icon-card": {
          transform: "translateX(-50%) scaleY(1)",
        },
        display: listView ? "flex" : "inherit",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Div sx={{ fontSize: "12px" }}>{sold && "Sale!"}</Div>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          sx={{
            height: {
              xs: listView ? "none" : "200px",
              sm: "220px",
              md: "260px",
            },
            width: listView ? { xs: "100%", sm: "220px", md: "260px" } : "none",
          }}
        />

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
              <Box
                sx={{
                  color: "gray",
                  "&:hover": { color: "#f03637" },
                  display: "flex",
                }}
                onClick={() => setOpenCart(true)}
              >
                <ShoppingCartIcon fontSize="small" sx={{ margin: "auto" }} />
              </Box>
            </RedTooltip>
            <RedTooltip title="Wishlist " placement="top">
              <Box
                sx={{
                  color: "gray",
                  "&:hover": { color: "#f03637" },
                  display: "flex",
                  marginLeft: "10px",
                }}
                onClick={() => setOpenWish(true)}
              >
                <FavoriteBorderIcon fontSize="small" sx={{ margin: "auto" }} />
              </Box>
            </RedTooltip>
            <RedTooltip title="Compare" placement="top">
              <Box
                sx={{
                  color: "gray",
                  "&:hover": { color: "#f03637" },
                  display: "flex",
                  marginLeft: "10px",
                }}
                aria-label="add an alarm"
              >
                <CompareArrowsIcon fontSize="small" sx={{ margin: "auto" }} />
              </Box>
            </RedTooltip>
            <RedTooltip title="Quick View" placement="top">
              <Box
                sx={{
                  color: "gray",
                  "&:hover": { color: "#f03637" },
                  display: "flex",
                  marginLeft: "10px",
                }}
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
          {!addWish && <FavoriteIcon sx={{ fontSize: 50, color: "#f03637" }} />}

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
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{
              margin: "0.2rem",
              transition: "all 150ms ease-in",
              "&:hover": { color: "#f03637" },
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            fontWeight={500}
          >
            {name}
          </Typography>
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
            sx={{ color: "#666666", marginTop: "25px", textAlign: "justify" }}
          >
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
export default ProductItem;
