import { Box, Button, Typography, Rating, styled } from "@mui/material";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const StyledModal = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    "& .img-box": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
}));

type T = {
  name: string;
  image: string;
  offPrice: number | null;
  price: number;
  sold: boolean;
  starRate: number;
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

const modalLeft = {
  overflow: "hidden",
  overflowY: "scroll",
  width: "65%",
  height: "100%",
  "& .img-box": {
    paddingTop: "3rem",
    width: "100%",
    height: "65%",
    objectFit: "cover",
  },
  "&::-webkit-scrollbar": {
    width: "1px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#b6b6b6",
  },
};
const modalRight = {
  width: "50%",
  p: "2rem",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0",
  },
};

const closeStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  padding: "3px 7px",
  cursor: "pointer",
  backgroundColor: "#f03637",
  transition: "all 0.2s",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#333",
  },
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

const Div = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  ...theme.typography.button,
  backgroundColor: theme.palette.error.main,
  padding: "0 5px",
  color: "#fff",
}));

/*  ============ Main Modal ========== */

const ModalView = ({ name, image, sold, price, offPrice, starRate }: T) => {
  return (
    <Box sx={modalStyle}>
      {sold && (
        <Box sx={{ position: "relative", top: "0", right: "0" }}>
          <Div sx={{ fontSize: "12px", padding: "0.2rem 0.8rem" }}>Sale!</Div>
        </Box>
      )}

      <StyledModal>
        <Box sx={modalLeft} className="box">
          <img src={image} className="img-box" alt="" />
          <img src={image} className="img-box" alt="" />
          <img src={image} className="img-box" alt="" />
          <img src={image} className="img-box" alt="" />
          <img src={image} className="img-box" alt="" />
        </Box>
        <Box sx={modalRight}>
          <Box sx={closeStyle} /* onClick={() => setOpenView(false)} */>
            <CloseRoundedIcon fontSize="medium" />
          </Box>
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
            <Box sx={{ color: "#777", margin: "0.6rem 0", fontSize: "13px" }}>
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
            The slick and designed Solar t-shirt by romi. features an intricate
            triangle print and tops stitched chest pocket in contrast colouring.
          </Typography>

          <Typography
            variant="body2"
            component="p"
            sx={{ margin: "0.8rem 0", color: "#777" }}
          >
            The cotton blend t-shirt comes in a regular fit.Record smoother,
            clearer videos. Local Heroes Transparent Heart Sweat
          </Typography>
          <Box
            sx={{
              p: "1rem 0",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", height: "3rem" }}>
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
      </StyledModal>
    </Box>
  );
};

export default ModalView;
