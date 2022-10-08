import { CardContent, Card, CardMedia, Typography } from "@mui/material";
import { cardWrapper, titleWrapper, titleStyle } from "../../styles";

interface T {
  id: number;
  name: string;
  image: string;
  count: number;
}

const Brand = ({ name, image, count }: T) => {
  return (
    <Card sx={cardWrapper}>
      <CardMedia
        component="img"
        height="100"
        image={image}
        alt="brand-img"
        sx={{
          width: "80%",
          margin: { xs: "auto", lg: "15px auto " },
          objectFit: "contain",
        }}
      />
      <CardContent sx={titleWrapper}>
        <Typography component="p" sx={titleStyle}>
          {name}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            pt: "2px",
            fontSize: "16px",
            color: "#f03637",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {count} items
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Brand;
