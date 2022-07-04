import { MoreHoriz } from "@mui/icons-material";
import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import { orders } from "../../../Services/Utils/Data/data";
import { TableButton, TBadge, TCell, THCell } from "../../../Styles/Orders";

const tableHead = ["#ID", "name", "email", "total", "status", "date", "action"];
const statusName = ["canceled", "pending", "received"];

interface Props {
  selectedAmount: string;
}

function OrdersTable({ selectedAmount }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHead.map((item, index) => (
            <THCell
              key={index}
              align="center"
              className={item === "action" ? "hidden" : ""}
            >
              {item}
            </THCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {orders
          .slice(0, +selectedAmount)
          .map(({ id, name, email, status, date, total }) => (
            <TableRow
              key={id}
              sx={{ "&:hover": { bgcolor: "common.panelActiveRed" } }}
            >
              <TCell>{id}</TCell>
              <TCell
                sx={{
                  fontWeight: 500,
                  wordBreak: "break-word",
                }}
              >
                {name}
              </TCell>
              <TCell sx={{ wordBreak: "break-all" }}>{email}</TCell>
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
                  <MoreHoriz
                    sx={{ margin: "auto", color: "common.panelGrey" }}
                  />
                </TableButton>
              </TCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default OrdersTable;
