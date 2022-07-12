import { MoreHoriz } from "@mui/icons-material";
import { Checkbox, Table, TableBody, TableHead, TableRow, Rating } from "@mui/material";
import { reviews } from "../../../Services/Utils/Data/data";
import { TableButton } from "../../../Styles/Orders";
import {TCell, THCell} from "../../../Styles/Reviews";
import StarIcon from "@mui/icons-material/Star";

const tableHead = [
  "",
  "#ID",
  "Product",
  "Name",
  "Rating",
  "date",
  "action",
];

interface Props {
  selectedAmount: string;
}

function ReviewsTable({ selectedAmount }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHead.map((item, index) => (
            <THCell
              key={index}
              align="left"
              className={item === "action" ? "hidden" : ""}
            >
              {item}
            </THCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {reviews
          .slice(0, +selectedAmount)
          .map(({ id, pId, product, name, rating, date }) => (
            <TableRow
              key={id}
              sx={{ "&:hover": { bgcolor: "common.panelActiveRed" } }}
            >
              <TCell>
                <Checkbox
                  sx={{
                    color: "#f03637",
                    "&.Mui-checked": {
                      color: "common.digitaRed",
                    },
                  }}
                />
              </TCell>
              <TCell>{pId}</TCell>
              <TCell
                sx={{
                  fontWeight: 500,
                  wordBreak: "break-word",
                }}
              >
                {product}
              </TCell>
              <TCell sx={{ wordBreak: "break-all" }}>{name}</TCell>
              
              <TCell>
                <Rating
                  name="text-feedback"
                  size="small"
                  value={rating}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
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

export default ReviewsTable;
