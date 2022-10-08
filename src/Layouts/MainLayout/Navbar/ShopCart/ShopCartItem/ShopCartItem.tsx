import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../../../../redux/cart/cartSlice";
import { shopCartCloseIcon } from "../../styles";

interface Props {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  productId: string;
}
function ShopCartItem({ id, name, price, quantity, image, productId }: Props) {
  const dispatch = useDispatch();

  const cartItemRemoveHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <ListItem
      disableGutters
      sx={{ img: { objectFit: "contain", aspectRatio: "1" } }}
    >
      <Link to={`/product/${productId}`}>
        <img src={image} alt="product" width={75} height={75} />
      </Link>
      <ListItemText sx={{ marginLeft: "16px", marginRight: "40px" }}>
        <Typography
          variant="body2"
          color={"primary"}
          component={Link}
          to={`/product/${productId}`}
          sx={{ textDecoration: "none" }}
        >
          {name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Typography variant="subtitle1" color={"secondary"}>
            {quantity} x
          </Typography>
          <Typography variant="body2" color={"primary"}>
            {price.toFixed(2)}
          </Typography>
        </Box>
      </ListItemText>
      <ListItemIcon>
        <Box>
          <CloseRounded
            onClick={cartItemRemoveHandler}
            sx={shopCartCloseIcon}
          />
        </Box>
      </ListItemIcon>
    </ListItem>
  );
}

export default ShopCartItem;
