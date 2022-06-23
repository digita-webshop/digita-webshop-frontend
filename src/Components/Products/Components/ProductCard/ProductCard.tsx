import { Card, Box, Typography } from "@mui/material";
import ButtonCard from "../ButtonCard/ButtonCard";
import { useInView } from "react-intersection-observer";
import {
  AnimatedGrid,
  cardStyle,
  contentStyle,
  styleContent,
} from "../../../../Styles/Products";

type Props = {
  title: string;
  name: string;
  image: string;
  id: number;
};

const ProductCard = ({ title, name, image, id }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const classes = id === 1 ? "leftAnimation" : "rightAnimation";
  return (
    <AnimatedGrid
      item
      xs={12}
      sm={6}
      md={6}
      ref={ref}
      className={inView ? classes : ""}
    >
      <Card sx={cardStyle}>
        <Box sx={contentStyle} className="box">
          <img src={image} alt="img" className="img-card" />
        </Box>
        <Box sx={styleContent} className="card-content">
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: "500",
              textTransform: "uppercase",
              color: "#fff",
            }}
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
    </AnimatedGrid>
  );
};

export default ProductCard;
