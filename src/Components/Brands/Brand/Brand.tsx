import {
  Box,
  Divider,
  CardContent,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import { cardWrapper, titleWrapper, titleStyle } from "../../../Styles/Brands";

const Brand = () => {
  return (
    <Card sx={cardWrapper}>
      <CardMedia
        component="img"
        height="100"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnadodoXEnuNUwaZmh06bSnLRJYPDuCvOWA&usqp=CAU"
        alt="brand-img"
        sx={{ backgroundColor: "#f2f2f3cc", objectFit: "contain" }}
      />
      <Divider sx={{ borderColor: "common.panelBorderGrey", opacity: ".1" }} />
      <CardContent sx={titleWrapper}>
        <Typography component="p" sx={titleStyle}>
          Apple
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ pt: "2px", fontSize: "16px", color: "#f03637" }}
        >
          87 items
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Brand;
