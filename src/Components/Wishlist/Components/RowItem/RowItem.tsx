import {
  Box,
  Button,
  Checkbox,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  closeStyle,
  StyledTableCell,
  StyledTableRow,
} from "../../../../Styles/Wishlist";

interface T {
  id: number;
  name: string;
  image: string;
  offPrice: number;
  price: number;
  date: string;
  status: boolean;
  onRemove: Function;
}

const RowItem = ({
  id,
  name,
  image,
  status,
  offPrice,
  price,
  date,
  onRemove,
}: T) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const addToCart = () => {
    console.log("Item added to cart");
  };

  return (
    <>
      <StyledTableRow key={id}>
        <StyledTableCell align="left" className="hidden">
          <Checkbox
            sx={{
              color: "#f03637",
              "&.Mui-checked": {
                color: "#f03637",
              },
            }}
          />
        </StyledTableCell>
        <StyledTableCell align="left" className="hidden">
          <Box sx={closeStyle} onClick={() => onRemove(id)}>
            <CloseIcon sx={{ fontSize: "16px" }} />
          </Box>
        </StyledTableCell>
        <StyledTableCell align="left">
          <Box
            sx={{
              position: "relative",
              img: {
                width: { xs: "100%", sm: "80px" },
                height: { sm: "80px" },
                objectFit: "cover",
              },
            }}
          >
            <img src={image} alt="img" />
            <Box sx={closeStyle} className="img" onClick={() => onRemove(id)}>
              <CloseIcon sx={{ fontSize: "26px" }} />
            </Box>
          </Box>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          <Typography component={"h6"}>{name}</Typography>
        </StyledTableCell>
        <StyledTableCell>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: { md: 12, sm: 12 },
            }}
          >
            {offPrice !== 0 && (
              <Box
                component="span"
                sx={{
                  marginRight: "0.5rem",
                  color: "#999",
                  textDecoration: "line-through",
                }}
              >
                {`$${offPrice}.00`}
              </Box>
            )}
            <Box sx={{ color: "#f03637" }}>${price}.00</Box>
          </Box>
        </StyledTableCell>
        <StyledTableCell>{date}</StyledTableCell>
        <StyledTableCell>{status}</StyledTableCell>
        <StyledTableCell>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {matches ? (
              <CheckIcon sx={{ mr: 1, fontSize: "18px" }} />
            ) : (
              <Box>
                <CheckIcon sx={{ mr: 1, fontSize: "18px" }} />
                In stock
              </Box>
            )}
          </Box>
        </StyledTableCell>
        <StyledTableCell align="right">
          <Button
            variant="contained"
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "140px" },
              height: { sm: "40px", md: "35px" },
            }}
            onClick={addToCart}
          >
            {matches ? (
              <ShoppingCartIcon sx={{ fontSize: "18px" }} />
            ) : (
              "ADD TO CART"
            )}
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default RowItem;
