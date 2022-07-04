import { MoreHoriz } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { orders } from "../../../Services/Utils/Data/data";
import { TableButton, TBadge, TCell } from "../../../Styles/Orders";

const tableHead = ["#ID", "name", "email", "total", "status", "date", "action"];
const statusName = ["canceled", "pending", "received"];

function OrdersTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHead.map((item, index) => (
            <TableCell
              key={index}
              align="center"
              sx={{
                color: "common.panelGrey",
                fontSize: "16px",
                fontWeight: 400,
                textTransform: "capitalize",
                display: item === "action" ? { xs: "none", sm: "block" } : "",
              }}
            >
              {item}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map(({ id, name, email, status, date, total }) => (
          <TableRow
            key={id}
            sx={{ "&:hover": { bgcolor: "common.panelActiveRed" } }}
          >
            <TCell>{id}</TCell>
            <TCell
              sx={{
                fontWeight: 500,
              }}
            >
              {name}
            </TCell>
            <TCell>{email}</TCell>
            <TCell>{`$${total.toFixed(2)}`}</TCell>
            <TCell>
              <TBadge className={statusName[status]}>
                {statusName[status]}
              </TBadge>
            </TCell>
            <TCell>{date}</TCell>
            <TCell
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                gap: "4px",
                flexWrap: "wrap",
              }}
            >
              <TableButton>Detail</TableButton>
              <TableButton sx={{ display: "flex", paddingY: "0" }}>
                <MoreHoriz sx={{ margin: "auto", color: "common.panelGrey" }} />
              </TableButton>
            </TCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OrdersTable;
