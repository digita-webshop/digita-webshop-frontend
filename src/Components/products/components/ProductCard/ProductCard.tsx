import { Card, Box, Grid, Typography } from "@mui/material";
import ButtonCard from "../ButtonCard/ButtonCard";

const styleContent = {
  padding: "2.2rem 2rem",
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  transition: "all 0.8 ease-in",
};

const cardStyle = {
  position: "relative",
  transition: "1s ease-in-out",
  "&:hover": {
    "& .img-card": {
      filter: "brightness(70%)",
      transform: "scale(1.17)",
    },
    "& .card-content": {
      transition: "0.8s",
      transform: "translateY(15px)",
    },
  },
};

const contentStyle = {
  height: "340px",
  img: {
    width: "100%",
    height: "340px",
    transition: "all 800ms ease-in-out",
  },
  overflow: "hidden",
};

type Props = {
  title: string;
  name: string;
  image: string;
};

const ProductCard = ({ title, name, image }: Props) => {
  return (
    <Grid item xs={12} sm={9} md={6}>
      <Card sx={cardStyle}>
        <Box sx={contentStyle} className="box">
          <img src={image} alt="img" className="img-card" />
        </Box>
        <Box  sx={styleContent} className="card-content">
          <Typography
            sx={{ fontSize: 16,fontWeight: "500", textTransform: "uppercase", color: "#fff" }}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            color="white"
            fontWeight="bold"
            sx={{ width: "250px" }}
          >
            {name}
          </Typography>
          <ButtonCard />
        </Box>
      </Card>
    </Grid>
  );
};

export default ProductCard;
