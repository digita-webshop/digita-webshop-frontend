import { Box, Button, TableRow, useMediaQuery, useTheme } from "@mui/material";
import {
  closeButtonStyles,
  ImageBox,
  StyledTableCell,
} from "../../../../Styles/Cart";
import CloseIcon from "@mui/icons-material/Close";
import QuantityInput from "../../QuantityInput";
import CartItem from "../../Types/CartItemType";
import { handleRowDelete } from "../../Services";

type Props = {
  cartItem: CartItem;
};

const CartListTableRow = ({ cartItem }: Props) => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  const deleteCartHandler = () => {
    handleRowDelete(cartItem?._id);
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
          <QuantityInput cartItem={cartItem} />
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
