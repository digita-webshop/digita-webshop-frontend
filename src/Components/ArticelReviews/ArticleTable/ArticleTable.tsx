import React, { useState } from "react";
import {
  Table,
  TableBody,
  Modal,
  Box,
  Typography,
  TableHead,
  TableRow,
} from "@mui/material";
import { TCheckBox, THCell } from "../../../Styles/Reviews";
import { TCell } from "../../../Styles/ArticleReview";
import { cartModal } from "../../../Styles/PanelProducts";
import { Close } from "@mui/icons-material";

const tableHead = [<TCheckBox />, "#ID", "reviews", "name", "date"];

interface Props {
  id: number;
  pId: number;
  review: string;
  name: string;
  date: string;
}

function ArticleTable({ id, pId, review, name, date }: Props) {
  const [open, setOpen] = useState(false);

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
        <TableRow
          onClick={() => setOpen(true)}
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
            <Box
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                padding: 1,
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            >
              <Close />
            </Box>
          </Box>
        </Modal>
      </TableBody>
    </Table>
  );
}

export default ArticleTable;
