import { Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material";
import { ICartItem } from "types/cart";
import { IAddress } from "types/user";
import { OrderRow } from "../../styles";

interface Props {
  cartItems: ICartItem[];
  subtotal: number;
  currentAddress: IAddress | null;
}

function OrderTable({ cartItems, subtotal, currentAddress }: Props) {
  return (
    <TableContainer sx={{ backgroundColor: "common.digitaGrey7" }}>
      <Table sx={{ border: "1px solid #ebebeb" }}>
        <TableHead>
          <OrderRow>
            <TableCell>PRODUCT</TableCell>
            <TableCell>SUBTOTAL</TableCell>
          </OrderRow>
        </TableHead>

        <TableBody>
          {cartItems.map((cart, index) => (
            <OrderRow key={cart._id!}>
              <TableCell
                sx={{ color: "common.digitaGrey3" }}
                style={{ fontWeight: 400 }}
              >{`${cart.name} x ${cart.quantity}`}</TableCell>
              <TableCell sx={{ color: "common.digitaRed" }}>{`$${cart.price * cart.quantity}`}</TableCell>
            </OrderRow>
          ))}
          <OrderRow>
            <TableCell>Subtotal</TableCell>
            <TableCell sx={{ color: "common.digitaRed" }}>{`$${subtotal}`}</TableCell>
          </OrderRow>
          <OrderRow>
            <TableCell>Shipping</TableCell>
            <TableCell sx={{ color: "#444444", width: "50%" }}>
              {currentAddress ? "$20" : "Enter Your Address To View Shipping Options"}
            </TableCell>
          </OrderRow>

          <OrderRow>
            <TableCell>Total</TableCell>
            <TableCell sx={{ color: "common.digitaRed", fontWeight: 500 }}>{`$${
              currentAddress ? subtotal + 20 : subtotal
            }`}</TableCell>
          </OrderRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderTable;
