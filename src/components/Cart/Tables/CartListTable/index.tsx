import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../../styles";
import { columnsData } from "../../data";
import CartListTableRow from "../CartListTableRow";
import { ICartItem } from "types/cart";

type Props = {
  cartList: ICartItem[];
};

const CartListTable = ({ cartList }: Props) => {
  return (
    <TableContainer component={Paper} sx={{ height: "100%", marginBottom: "20px" }}>
      <Table sx={{ border: "1px solid #ebebeb" }} aria-label="customized table">
        <TableHead sx={{ display: { xs: "none", sm: "table-header-group" } }}>
          <TableRow>
            {columnsData.map((column) => {
              return (
                <StyledTableCell key={column.id} width={column.width}>
                  {column.name}
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {cartList.map((cart) => (
            <CartListTableRow key={cart._id} cartItem={cart} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartListTable;
