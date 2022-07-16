import {
  Box,
  CardContent,
  Button,
  Card,
  CardMedia,
  Typography,
  Modal,
} from "@mui/material";
import {useState} from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import {
  cardWrapper,
  titleWrapper,
  titleStyle,
  deleteBtn,
  editBtn,
} from "../../../Styles/PanelProducts";
import DeleteModal from "../DeleteModal/DeleteModal";

type T = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const Product = ({ name, price, image }: T) => {
  const [open, setOpen] = useState(false);

  return (
    <Card sx={cardWrapper}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt="green iguana"
        sx={{ backgroundColor: "#f2f2f3cc", objectFit: "contain" }}
      />
      <CardContent sx={titleWrapper}>
        <Typography component="p" sx={titleStyle}>
          {name}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ pt: "2px", fontSize: "16px" }}
        >
          {"$" + price}
        </Typography>
        <Box sx={{ display: "flex", mt: 1, gap: 1 }}>
          <Button variant="contained" sx={editBtn}>
            <EditIcon sx={{ margin: "0 0.2rem", color: "#999" }} />
            Edit
          </Button>
          <Button variant="contained" sx={deleteBtn}>
            <DeleteForeverIcon sx={{ margin: "0 0.2rem" }} />
            Delete
          </Button>
        </Box>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <DeleteModal />
        </Modal>
      </CardContent>
    </Card>
  );
};

export default Product;
