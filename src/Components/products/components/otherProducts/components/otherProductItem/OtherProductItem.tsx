import { Card, CardContent, Grid, Typography } from "@mui/material";
import ButtonOther from "../button/ButtonOther";

type Props = {
  title: string;
  name: string;
  image: string;
};

const cardContent = {
  padding: "2rem",
  width: "250px" 
}



const OtherProductItem = ({ title, name, image }: Props) => {
  const cardStyle = {
    minWidth: 450,
    height: 340,
    background:
    `url(${image}) no-repeat center`,
    backgroundSize: "stretch",
    "&:hover": {
      transition: "1s",
    },
  };

  
  return (
    <Grid item xs={8} md={6}>
      <Card sx={cardStyle}>
        <CardContent sx={cardContent}>
          <Typography
            sx={{ fontSize: 20, textTransform: "uppercase", color: "#fff" }}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            color="white"
            fontWeight="bold"
          >
            {name}
          </Typography>
          <ButtonOther />
        </CardContent>
      </Card>
    </Grid>
  );
};


export default OtherProductItem;
