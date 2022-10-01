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
  CartInput,
  AmountBtn,
} from "../../../../../Styles/Products";

type T = {
  title: string;
  image: string;
  offPrice: number | null;
  price: number;
  rating: number;
  handleClose: any;
};

const ModalView = ({
  title,
  image,
  price,
  offPrice,
  rating,
  handleClose,
}: T) => {
  const [value, setValue] = useState(1);
  const [color, setColor] = useState("");

  const handleDecValue = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
    }
  };
  const handleIncValue = () => {
    setValue((prev) => prev + 1);
  };
  const handleChange = (e: any) => {
    setColor(e.target.value);
  };

  return (
    <Box sx={modalStyle}>
      {/* {sold && (
        <Box sx={{ position: "relative", top: "0", right: "0" }}>
          <IconDiv sx={{ fontSize: "12px", padding: "0.2rem 0.8rem" }}>
            Sale!
          </IconDiv>
        </Box>
      )} */}

      <StyledModal>
        <Box sx={modalLeft} className="box">
          <img src={image} className="img-box" alt="" />
          <img src={image} className="img-box" alt="" />
          <img src={image} className="img-box" alt="" />
          <img src={image} className="img-box" alt="" />
          <img src={image} className="img-box" alt="" />
        </Box>
        <Box sx={modalRight} className="rightBox">
          <Box sx={closeStyle} onClick={handleClose}>
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

          <FormControl sx={{ minWidth: "100%" }} size="small">
            <InputLabel id="demo-simple-select-helper-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={color}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Black</MenuItem>
              <MenuItem value={20}>Red</MenuItem>
              <MenuItem value={30}>White</MenuItem>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>

          <Box
            sx={{
              p: "1rem 0",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", height: "3rem" }}>
              <AmountBtn width={"40px"} onClick={handleDecValue}>
                -
              </AmountBtn>
              <CartInput
                id="outlined-number"
                type="number"
                value={value}
                sx={{
                  width: "40px",
                }}
                size="small"
              />
              <AmountBtn onClick={handleIncValue} width={"40px"}>
                +
              </AmountBtn>
            </Box>
            <Button variant="contained" sx={{ fontSize: "14px" }}>
              Add to Cart
            </Button>
          </Box>
          <Box sx={label}>
            <FavoriteBorderIcon fontSize="small" />
            <Typography
              className="wish"
              sx={{ fontSize: "23px", color: "#333" }}
            >
              Wishlist
            </Typography>
          </Box>
        </Box>
      </StyledModal>
    </Box>
  );
};
export default ModalView;
