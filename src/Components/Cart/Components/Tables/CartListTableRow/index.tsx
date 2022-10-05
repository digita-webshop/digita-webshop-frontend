import { Box, Button, TableRow, useMediaQuery, useTheme } from "@mui/material";
import { closeButtonStyles, ImageBox, StyledTableCell } from "../../../styles";
import CloseIcon from "@mui/icons-material/Close";
import QuantityInput from "../../QuantityInput/QuantityInput";
import { ICartItem } from "../../../../../Services/Types/cart";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../../features/cart/cartSlice";

type Props = {
  cartItem: ICartItem;
};

const CartListTableRow = ({ cartItem }: Props) => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const deleteCartHandler = () => {
    dispatch(removeFromCart(cartItem?._id));
  };
  return (
    <TableRow key={cartItem._id}>
      {!matchesSm && (
        <StyledTableCell align="left">
          <Button onClick={deleteCartHandler} sx={closeButtonStyles}>
            <CloseIcon sx={{ fontSize: "inherit", color: "#333333" }} />
          </Button>
        </StyledTableCell>
      )}
      <StyledTableCell align="left">
        <ImageBox>
          <img alt={cartItem?.name} src={cartItem?.productId.image} />
          {matchesSm && (
            <Box onClick={deleteCartHandler}>
              <CloseIcon sx={{ fontSize: "28px", color: "#333333" }} />
            </Box>
          )}
        </ImageBox>
      </StyledTableCell>
      <StyledTableCell align="left" scope="cartItem">
        <span>product:</span>
        {cartItem?.name}
      </StyledTableCell>
      <StyledTableCell sx={{ color: "#f03637" }} align="left">
        <span>price:</span>${cartItem?.price.toFixed(2)}
      </StyledTableCell>
      <StyledTableCell align="center">
        <span>quantity:</span>
        {cartItem?.productId?.quantity > 1 ? (
          <Box height={"50px"}>
            <QuantityInput cartItem={cartItem} />
          </Box>
        ) : (
          cartItem?.quantity
        )}
      </StyledTableCell>
      <StyledTableCell align="right" sx={{ color: "#f03637" }}>
        ${(cartItem?.quantity * +cartItem.price).toFixed(2)}
        <span>quantity:</span>
      </StyledTableCell>
    </TableRow>
  );
};

export default CartListTableRow;
