import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { articleReviews } from "../../../Services/Utils/Data/data";
import { TCell, TCheckBox, THCell } from "../../../Styles/Reviews";
import { useTheme } from "@mui/material/styles";

const tableHead = [
  <TCheckBox />,
  "#ID",
  "reviews",
  "name",
  "date",
];

interface Props {
  selectedAmount: string;
}

function ArticleTable({ selectedAmount }: Props) {
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
        {articleReviews
          .slice(0, +selectedAmount)
          .map(({ id, pId, review, name, date }) => (
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
                {review}
              </TCell>
              <TCell sx={{ wordBreak: "break-all" }}>{name}</TCell>
              <TCell>{date}</TCell>
              
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default ArticleTable;
