import {
  Box,
  CardContent,
  Button,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import {
  cardWrapper,
  titleStyle,
  deleteBtn,
  editBtn,
} from "../../../Styles/PanelProducts";

type T = {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Product = ({ name, price, image}: T) => {
  return (
    <Card sx={cardWrapper}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{ paddingBottom: "1rem !important"}}>
        <Typography component="p" sx={titleStyle}>
          {name}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ pt: "2px", fontSize: "16px" }}
        >
          {`$${price}00`}
        </Typography>
        <Box sx={{ display: "flex", mt: 1, gap: 1 }}>
          <Button variant="contained" sx={editBtn}>
            <EditIcon sx={{ margin: "0 0.2rem", color: "#999" }}/>
            Edit
          </Button>
          <Button variant="contained" sx={deleteBtn}>
            <DeleteForeverIcon sx={{ margin: "0 0.2rem" }}/>
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;
