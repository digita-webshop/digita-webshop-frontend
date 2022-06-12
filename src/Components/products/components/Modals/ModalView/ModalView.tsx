import { Box, Button, Typography, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  closeStyle,
  IconDiv,
  label,
  modalRight,
  modalLeft,
  modalStyle,
  StyledModal,
} from "../../../../../Styles/Products";

type T = {
  name: string;
  image: string;
  offPrice: number | null;
  price: number;
  sold: boolean;
  starRate: number;
  handleClose: any;
};

const customBtn = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  width: "40px",
  cursor: "pointer",
  height: "80%",
  background: "#333",
  fontSize: "20px",
  userSelect: 'none'
};

const ModalView = ({
  name,
  image,
  sold,
  price,
  offPrice,
  starRate,
  handleClose,
}: T) => {
  const [value, setValue] = useState(1);

  const handleDecValue = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
    }
  };
  const handleIncValue = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <Box sx={modalStyle}>
      {sold && (
        <Box sx={{ position: "relative", top: "0", right: "0" }}>
          <IconDiv sx={{ fontSize: "12px", padding: "0.2rem 0.8rem" }}>
            Sale!
          </IconDiv>
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
          <Box sx={closeStyle} onClick={handleClose}>
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
            <Box sx={{ display: "flex", alignItems: "center", height: "3rem" }}>
              <Box sx={customBtn} onClick={handleDecValue}>
                -
              </Box>
              <TextField
                id="outlined-number"
                type="number"
                value={value}
                sx={{ width: "60px" }}
                size="small"
              />
              <Box sx={customBtn} onClick={handleIncValue}>
                +
              </Box>
            </Box>
            <Button variant="contained" sx={{ fontSize: "14px" }}>
              Add to Cart
            </Button>
          </Box>
          <Box sx={label}>
            <FavoriteBorderIcon fontSize="small"/>
            <Typography className="wish" sx={{fontSize: '23px', color: '#333'}}>Wishlist</Typography>
          </Box>
        </Box>
      </StyledModal>
    </Box>
  );
};
export default ModalView;
