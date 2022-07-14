import { MoreHoriz } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Rating,
  useMediaQuery,
} from "@mui/material";
import { reviews } from "../../../Services/Utils/Data/data";
import { TableButton } from "../../../Styles/Orders";
import { TCell, TCheckBox, THCell } from "../../../Styles/Reviews";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";

const tableHead = [
  <TCheckBox />,
  "#ID",
  "product",
  "name",
  "rating",
  "date",
  "action",
];

interface Props {
  selectedAmount: string;
}

function ReviewsTable({ selectedAmount }: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHead.map((item, index) => (
            <THCell
              key={index}
              align="left"
              className={`${item === "action" && "hidden"} ${
                item === "rating" && "hiddenSm"
              }`}
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
                <TCheckBox />
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

              {!matchesSm && (
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
              )}
              <TCell>{date}</TCell>
              {!matches && (
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
              )}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default ReviewsTable;
