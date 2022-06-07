import React from "react";
import { Card, Box, CardContent, Typography } from "@mui/material";
import ButtonOther from "../../../../../products/components/otherProducts/components/button/ButtonOther";

const contentStyle = {
  padding: "2.5rem 2rem",
  width: "250px",
};

const OtherProductItem = () => {
  const cardStyle = {
    height: 340,
    background: `url(https://demo-61.woovinapro.com/wp-content/uploads/2022/04/banner3.jpg) no-repeat center`,
    backgroundSize: "100%",
    transition: "1s",
    "&:hover": {
      backgroundSize: "120%",
      filter: "brightness(70%)",
    },
  };

  return (
    <Box>
      <Card sx={cardStyle}>
        <CardContent sx={contentStyle}>
          <Typography
            sx={{ fontSize: 20, textTransform: "uppercase", color: "#fff" }}
            gutterBottom
          >
            limited edition
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            color="white"
            fontWeight="bold"
          >
            Xbox One S
          </Typography>
          <ButtonOther />
        </CardContent>
      </Card>
    </Box>
  );
};

export default OtherProductItem;
