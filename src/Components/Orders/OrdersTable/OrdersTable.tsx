import { MoreHoriz } from "@mui/icons-material";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { tableBadgeStyles, TableButton, TCell } from "../../../Styles/Orders";

const tableHead = ["#ID", "name", "email", "total", "status", "date", "action"];

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
        <TableRow sx={{ "&:hover": { bgcolor: "common.panelActiveRed" } }}>
          <TCell>0654</TCell>
          <TCell
            sx={{
              fontWeight: 500,
            }}
          >
            Esther Howard
          </TCell>
          <TCell>esther@example.com</TCell>
          <TCell>$12.00</TCell>
          <TCell>
            <Box sx={tableBadgeStyles}>Canceled</Box>
          </TCell>
          <TCell>03.07.2022</TCell>
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
      </TableBody>
    </Table>
  );
}

export default OrdersTable;
