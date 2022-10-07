import { ICartItem } from "@/Services/Types/cart";
import { IProduct } from "@/Services/Types/product";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";
import { OrderRow } from "../../../Styles/Checkout";

const cardList = [
  {
    id: 1,
    name: "SmartPhone & Ipad ",
    quantity: 4,
    price: 57.0,
  },
  {
    id: 2,
    name: "Corsair HS35 Headphones(Red) ",
    quantity: 2,
    price: 120.0,
  },
];

interface Props {
  cartItems: ICartItem[];
  subtotal: number;
}

function OrderTable({ cartItems, subtotal }: Props) {
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
          {/* {cartItems.map((cart, index) => (
            <OrderRow key={cart.product._id!}>
              <TableCell
                sx={{ color: "common.digitaGrey3" }}
                style={{ fontWeight: 400 }}
              >{`${cart.product.title} x ${cart.quantity}`}</TableCell>
              <TableCell
                sx={{ color: "common.digitaRed" }}
              >{`$${cart.products.price}`}</TableCell>
            </OrderRow>
          ))} */}
          <OrderRow>
            <TableCell>Subtotal</TableCell>
            <TableCell
              sx={{ color: "common.digitaRed" }}
            >{`$${subtotal}`}</TableCell>
          </OrderRow>
          <OrderRow>
            <TableCell>Shipping</TableCell>
            <TableCell sx={{ color: "#444444", width: "50%" }}>
              Enter Your Address To View Shipping Options
            </TableCell>
          </OrderRow>
          <OrderRow>
            <TableCell>Total</TableCell>
            <TableCell sx={{ color: "common.digitaRed", fontWeight: 500 }}>
              $430.00
            </TableCell>
          </OrderRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderTable;
