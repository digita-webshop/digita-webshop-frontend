import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
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
const OrderRow = styled(TableRow)(({ theme }) => ({
  td: {
    "&:first-child": {
      fontWeight: 600,
      borderRight: "1px solid #ebebeb",
    },
    "&:last-child": {
      textAlign: "right",
    },
  },
  th: {
    fontSize: "15px",
    padding: "20px 16px",
    fontWeight: 600,
    color: theme.palette.common.digitaBlack,

    "&:first-child": {
      borderRight: "1px solid #ebebeb",
    },
    "&:last-child": {
      textAlign: "right",
    },
  },
}));
function OrderTable() {
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
          {cardList.map((cart) => (
            <OrderRow>
              <TableCell
                sx={{ color: "common.digitaGrey3" }}
                style={{ fontWeight: 400 }}
              >{`${cart.name} x ${cart.quantity}`}</TableCell>
              <TableCell
                sx={{ color: "common.digitaRed" }}
              >{`$${cart.price}`}</TableCell>
            </OrderRow>
          ))}
          <OrderRow>
            <TableCell>Subtotal</TableCell>
            <TableCell sx={{ color: "common.digitaRed" }}>$665.00</TableCell>
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
