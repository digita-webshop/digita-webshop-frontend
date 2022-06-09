import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import ButtonOther from "../../../Products/Components/ButtonCard/ButtonCard";

type Props = {
  title: string;
  name: string;
  image: string;
};

const styleFix = {
  paddingLeft: '1.5rem',
}

const contentStyle = {
  padding: "2.5rem 2rem",
  width: "250px",
};

const SpecialCard = ({ title, name, image }: Props) => {
  const cardStyle = {
    height: 340,
    background: `url(${image}) no-repeat center`,
    backgroundSize: "100%",
    transition: "1s",
    "&:hover": {
      backgroundSize: "120%",
      filter: "brightness(70%)",
    },
  };

  return (
    <Grid item xs={8} md={6}>
      <Card sx={cardStyle}>
        <CardContent sx={contentStyle}></CardContent>
        <Box sx={styleFix}>
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
        </Box>
      </Card>
    </Grid>
  );
};

export default SpecialCard;
