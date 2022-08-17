import React,{useState} from "react";
import {
  Table,
  TableBody,
  Modal,
  Box,
  Typography,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { articleReviews } from "../../../Services/Utils/Data/data";
import { TCheckBox, THCell } from "../../../Styles/Reviews";
import { TCell } from "../../../Styles/ArticleReview";
import { useTheme } from "@mui/material/styles";
import { cartModal } from "../../../Styles/PanelProducts";

const tableHead = [<TCheckBox />, "#ID", "reviews", "name", "date"];

interface Props {
  selectedAmount: string;
}

function ArticleTable({ selectedAmount }: Props) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Table onClick={() => setOpen(true)}>
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
            <React.Fragment>
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
                <TCell sx={{ textAlign: "right" }}>{date}</TCell>
              </TableRow>

              <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={cartModal}>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    sx={{ textAlign: "center" }}
                >
                    {review}
                  </Typography>
                </Box>
              </Modal>
            </React.Fragment>
          ))}
      </TableBody>
    </Table>
  );
}

export default ArticleTable;
