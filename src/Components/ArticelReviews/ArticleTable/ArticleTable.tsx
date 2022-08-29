import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { Modal, Box, Typography, TableRow, useMediaQuery } from "@mui/material";
import { TCheckBox } from "../../../Styles/Reviews";
import { TableButton } from "../../../Styles/Orders";
import { TCell } from "../../../Styles/ArticleReview";
import { cartModal } from "../../../Styles/PanelProducts";
import { Close } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

interface Props {
  id: number;
  pId: number;
  review: string;
  name: string;
  date: string;
}

function ArticleTable({ id, pId, review, name, date }: Props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
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
        <TCell sx={{ textAlign: "left" }}>{date}</TCell>

        {!matches && (
          <TCell
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              gap: "4px",
              flexWrap: "wrap",
            }}
          >
            <TableButton onClick={() => setOpen(true)}>Detail</TableButton>
            <TableButton sx={{ display: "flex", paddingY: "0" }}>
              <DeleteIcon sx={{ margin: "auto", color: "common.panelGrey" }} />
            </TableButton>
          </TCell>
        )}
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
    </>
  );
}

export default ArticleTable;
