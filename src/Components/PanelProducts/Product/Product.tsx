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

const Product = () => {
  return (
    <Card sx={cardWrapper}>
      <CardMedia
        component="img"
        height="230"
        image="https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-1-330x330.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography component="p" sx={titleStyle}>
          Product name
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ pt: "2px", fontSize: "16px" }}
        >
          $179.00
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
