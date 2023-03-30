import { Card, Typography, Box } from "@mui/material";
import ButtonCard from "../../../Products/Components/ButtonCard/ButtonCard";
import { styleContent, cardStyle, contentStyle } from "../../styles";
import { useInView } from "react-intersection-observer";
import { AnimatedGrid } from "components/Home/Products/styles";

type Props = {
  title: string;
  name: string;
  image: string;
  id: number;
};

const SpecialCard = ({ title, name, image, id }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const classes = id === 0 ? "slideInFromLeft" : "slideInFromRight";
  return (
    <AnimatedGrid item xs={12} sm={6} md={6} className={inView ? classes : ""} ref={ref}>
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
          <Typography variant="h4" component="h3" color="white" fontWeight="bold" sx={{ width: "250px" }}>
            {name}
          </Typography>
          <ButtonCard />
        </Box>
      </Card>
    </AnimatedGrid>
  );
};

export default SpecialCard;
