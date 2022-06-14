import {
  Box,
  Button,
  Typography,
  Rating,
  TextField,
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
  color: "#555",
  width: "40px",
  cursor: "pointer",
  height: "80%",
  background: "#d9d9d9",
  fontSize: "20px",
  userSelect: "none",
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
  const [size, setSize] = useState();
  const [color, setColor] = useState();

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
  const handleSizeChange = (e: any) => {
    setSize(e.target.value)
  }

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
        <Box sx={modalRight} className="rightBox">
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
            sx={{ borderBottom: "1px solid #d2d2d2", paddingBottom: "0.5rem" }}
          >
            <FormControl sx={{mt:1, minWidth: "100%" }} size="small">
              <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={size}
                label="Age"
                onChange={handleSizeChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>L</MenuItem>
                <MenuItem value={20}>M</MenuItem>
                <MenuItem value={30}>S</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
          </Box>

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
