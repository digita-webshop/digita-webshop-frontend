import { MoreHoriz } from "@mui/icons-material";
import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import { TableButton, TBadge, TCell, THCell } from "../styles";

const tableHead = ["#ID", "name", "email", "total", "status", "date", "action"];

interface Props {
  orders?: any;
}

function OrdersTable({ orders }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHead.map((item, index) => (
            <THCell key={index} align="center" className={item === "action" ? "hidden" : ""}>
              {item}
            </THCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {orders?.map((order: any) => (
          <TableRow key={order._id!} sx={{ "&:hover": { bgcolor: "common.panelActiveRed" } }}>
            <TCell>{order._id!.slice(0, 2)}</TCell>
            <TCell
              sx={{
                fontWeight: 500,
                wordBreak: "break-word",
              }}
            >
              {order.userId?.userName}
            </TCell>
            <TCell sx={{ wordBreak: "break-all" }}>{order.userId?.email}</TCell>
            <TCell>{`$${21}`}</TCell>
            <TCell>
              <TBadge className={order.status}>{order.status}</TBadge>
            </TCell>
            <TCell>{"date"}</TCell>
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
