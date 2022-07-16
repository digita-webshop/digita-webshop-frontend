import React, { Dispatch } from "react";
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
import { UpdateCart } from "../../ShoppingCart";
import { UpdateType } from "../../CartUpdated";

type Props = {
  row: CartItem;
  cartList: CartItem[];
  setUpdateButtonDisabled: Dispatch<React.SetStateAction<boolean>>;
  updateButtonDisabled: boolean;
  values: CartItem[];
  setValues: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setCartUpdated: React.Dispatch<React.SetStateAction<UpdateCart | null>>;
};

const CartListTableRow = ({
  row,
  cartList,
  values,
  setValues,
  setUpdateButtonDisabled,
  setCartUpdated,
  updateButtonDisabled,
}: Props) => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  const deleteCartHandler = () => {
    handleRowDelete(row.id);
    setCartUpdated((prevState) => {
      return {
        ...prevState,
        item: cartList.filter((item) => item.id === row.id)[0],
        type: UpdateType.Remove,
      };
    });
  };
  return (
    <TableRow key={row.id}>
      {!matchesSm && (
        <StyledTableCell align="left">
          <Button onClick={deleteCartHandler} sx={closeButtonStyles}>
            <CloseIcon sx={{ fontSize: "inherit", color: "#333333" }} />
          </Button>
        </StyledTableCell>
      )}
      <StyledTableCell align="left">
        <ImageBox>
          <img alt={row?.alt} src={row?.image} />
          {matchesSm && (
            <Box onClick={deleteCartHandler}>
              <CloseIcon sx={{ fontSize: "28px", color: "#333333" }} />
            </Box>
          )}
        </ImageBox>
      </StyledTableCell>
      <StyledTableCell align="left" scope="row">
        <span>product:</span>
        {row?.product}
      </StyledTableCell>
      <StyledTableCell sx={{ color: "#f03637" }} align="left">
        <span>price:</span>${row?.price.toFixed(2)}
      </StyledTableCell>
      <StyledTableCell align="center">
        <span>quantity:</span>
        {row?.total > 1 ? (
          <QuantityInput
            setUpdateButtonDisabled={setUpdateButtonDisabled}
            updateButtonDisabled={updateButtonDisabled}
            row={row}
            cartList={cartList}
            values={values}
            setValues={setValues}
          />
        ) : (
          row?.quantity
        )}
      </StyledTableCell>
      <StyledTableCell align="right" sx={{ color: "#f03637" }}>
        ${(row?.quantity * +row.price).toFixed(2)}
        <span>quantity:</span>
      </StyledTableCell>
    </TableRow>
  );
};

export default CartListTableRow;
