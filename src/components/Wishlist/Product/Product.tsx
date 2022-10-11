import { Box, CardContent, Button, Card, CardMedia, Typography, Modal } from "@mui/material";

import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { cartModal } from "../../PanelProducts/styles";
import { titleWrapper, titleStyle } from "../../PanelProducts/styles";
import { cardWrapper, deleteBtn, addBtn } from "styles/user";
import { useDeleteWishMutation } from "redux/wishlist/wishlistApi";
import { successMessage } from "utils/toastMessages";
import { useAppSelector } from "redux/store";

type T = {
  id: string;
  title: string;
  price: number;
  image: string;
};

const Product = ({ id, title, price, image }: T) => {
  const [open, setOpen] = useState(false);
  const { role } = useAppSelector((state) => state.reducer.auth);

  const [deleteWish, { isLoading }] = useDeleteWishMutation();

  async function handleRemove(id: string) {
    try {
      const response = await deleteWish({ path: role!, id }).unwrap();
      if (response.code !== 200) {
        throw new Error(response?.message);
      }
      console.log(response);
      successMessage("wish deleted successfully");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Card sx={cardWrapper}>
      <CardMedia component="img" image={image} alt="green iguana" sx={{ aspectRatio: "1", objectFit: "contain" }} />
      <CardContent sx={titleWrapper}>
        <Typography component="p" sx={titleStyle}>
          {title}
        </Typography>
        <Typography variant="h6" component="div" sx={{ pt: "2px", fontSize: "16px" }}>
          {"$" + price}
        </Typography>
        <Box sx={{ display: "flex", mt: 1, gap: 1 }}>
          <Button variant="contained" sx={deleteBtn} onClick={() => setOpen(true)}>
            <DeleteForeverIcon sx={{ margin: "0 0.2rem" }} />
            Delete
          </Button>
          <Button variant="contained" sx={addBtn}>
            <ShoppingCartIcon className="addIcon" />
            Add To Cart
          </Button>
        </Box>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={cartModal}>
            <DeleteForeverIcon sx={{ fontSize: 110, fontWeight: 100, color: "#f03637", p: 2 }} />
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ textAlign: "center" }}>
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
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleRemove(id)}
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
      </CardContent>
    </Card>
  );
};

export default Product;
