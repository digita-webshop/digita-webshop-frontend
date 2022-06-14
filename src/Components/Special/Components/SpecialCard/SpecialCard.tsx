import React from "react";
import { Card, Typography, Grid, Box } from "@mui/material";
import ButtonCard from "../../../Products/Components/ButtonCard/ButtonCard";
import { styleContent, cardStyle, contentStyle } from '../../../../Styles/Special'

type Props = {
  title: string;
  name: string;
  image: string;
};

const SpecialCard = ({ title, name, image }: Props) => {
  return (
    <Grid item xs={12} sm={9} md={6}>
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
    </Grid>
  );
};

export default SpecialCard;
