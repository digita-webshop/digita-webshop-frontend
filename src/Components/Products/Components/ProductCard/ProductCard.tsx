import { Card, Box, Grid, Typography } from "@mui/material";
import ButtonCard from "../ButtonCard/ButtonCard";
import { useInView } from "react-intersection-observer";
import { styled } from "@mui/material/styles";

const styleContent = {
  padding: "2.2rem 2rem",
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  transition: "all 0.8s",
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
      transform: "translateY(15px)",
    },
  },
};
const AnimatedGrid = styled(Grid)(({ theme }) => ({
  "&.leftAnimation": {
    animation: `leftProductFadIn 1000ms ${theme.transitions.easing.easeInOut}`,
    "@keyframes leftProductFadIn": {
      "0%": {
        opacity: 0,
        transform: `translateX(-100% )`,
      },
      "100%": {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  },
  "&.rightAnimation": {
    animation: `rightProductFadIn 1000ms ${theme.transitions.easing.easeInOut}`,
    "@keyframes rightProductFadIn": {
      "0%": {
        opacity: 0,
        transform: `translateX(100% )`,
      },
      "100%": {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  },
}));

const contentStyle = {
  height: "340px",
  img: {
    width: "100%",
    height: "340px",
    transition: "all 800ms ease-in-out",
    objectFit: "cover",
  },
  overflow: "hidden",
};

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
