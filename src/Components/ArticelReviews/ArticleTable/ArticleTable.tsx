import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState, ChangeEvent } from "react";
import {
  Modal,
  Box,
  Typography,
  TableRow,
  useMediaQuery,
  Button,
} from "@mui/material";
import { TCheckBox } from "../../../Styles/Reviews";
import { TCell, TableButton } from "../../../Styles/ArticleReview";
import { cartModal } from "../../../Styles/PanelProducts";
import { Close } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

interface Props {
  id: number;
  pId: number;
  review: string;
  name: string;
  date: string;
  onRemove: Function;
  handleToggle: any;
  checked: number[];
}

function ArticleTable({
  id,
  pId,
  review,
  name,
  date,
  onRemove,
  handleToggle,
  checked,
}: Props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  function handleDelete() {
    onRemove(id);
    setOpenDelete(false);
  }

  return (
    <>
      <TableRow
        key={id}
        sx={{ "&:hover": { bgcolor: "common.panelActiveRed" } }}
      >
        <TCell>
          <TCheckBox
            onChange={handleToggle(id)}
            checked={checked.indexOf(id) !== -1}
          />
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
              alignItems: "center",
              gap: "4px",
              flexWrap: "wrap",
            }}
          >
            <TableButton onClick={() => setOpen(true)}>Detail</TableButton>
            <TableButton
              onClick={() => setOpenDelete(true)}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <DeleteIcon sx={{ color: "common.panelGrey" }} />
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

      <Modal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={cartModal}>
          <DeleteForeverIcon
            sx={{ fontSize: 110, fontWeight: 100, color: "#f03637", p: 2 }}
          />
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Delete this item?
          </Typography>
          <Box sx={{ display: "flex", gap: 3, margin: "1rem 0" }}>
            <Button
              variant="contained"
              sx={{
                p: "0.8rem 2.2rem",
                borderRadius: "4px",
                fontSize: "15px",
                height: "46px",
              }}
              onClick={() => setOpenDelete(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              variant="contained"
              sx={{
                p: "0.8rem 2.2rem",
                background: "#f03637",
                borderRadius: "4px",
                fontSize: "15px",
                height: "46px",
                "&:hover": { background: "#333" },
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ArticleTable;
