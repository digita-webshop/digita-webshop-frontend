import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useGetProductQuery } from "../../../../../features/products/productsApi";
import { IProduct } from "../../../../../Services/Types/product";
import { shopCartCloseIcon } from "../../../../../Styles/Appbar";

interface Props {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  handleRowDelete: (id: string) => void;
}
function ShopCartItem({
  id,
  name,
  price,
  quantity,
  image,
  handleRowDelete,
}: Props) {
  return (
    <ListItem disableGutters sx={{ img: { objectFit: "contain" } }}>
      <img src={image} alt="product" width={75} height={75} />
      <ListItemText sx={{ marginLeft: "16px", marginRight: "40px" }}>
        <Typography variant="body2" color={"primary"}>
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
            onClick={() => handleRowDelete(id)}
            sx={shopCartCloseIcon}
          />
        </Box>
      </ListItemIcon>
    </ListItem>
  );
}

export default ShopCartItem;
