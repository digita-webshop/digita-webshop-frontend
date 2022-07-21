import productOne from "../../../../Assets/Images/Product/product-7.jpg";
import productTwo from "../../../../Assets/Images/Product/product-13.jpg";
import {
  allBought,
  boughtTogether,
  boughttitleStyle,
  boughtPriceStyle,
  imageBought,
  BoughtTextStyle,
  BoughtButton,
} from "../../../../Styles/Product";

import { Button, Box, Typography, Grid, Divider } from "@mui/material";

import { Card, CardMedia, CardActionArea } from "@mui/material";

const BoughtTogether = () => {
  return (
    <Box sx={boughtPriceStyle}>
      <Typography variant="h3" component="h3" sx={boughttitleStyle}>
        FREQUENTLY BOUGHT TOGETHER
      </Typography>
      <Divider sx={{ fontSize: "100px", fontWeight: "900" }} />

      <Box sx={boughtTogether}>
        {/* ===========================imageBought================ */}
        <Box sx={imageBought}>
          <Card sx={{ border: " 1px solid #ebebeb", margin: "0 0.5rem " }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="96"
                width="96"
                image={productOne}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>

          <Typography variant="body2" component="p" sx={BoughtTextStyle}>
            +
          </Typography>
          <Card sx={{ border: " 1px solid #ebebeb", margin: "0 0.5rem" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="96"
                width="96"
                image={productTwo}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Box>

        {/* ===========================allBought================ */}
        <Box sx={allBought}>
          <Typography variant="body2" component="p" sx={BoughtTextStyle}>
            <p>
              {" "}
              Price for all: <span className="newPrice">$77.00</span>
            </p>

            <Button sx={BoughtButton} variant="contained" color="error">
              Add All To Cart
            </Button>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ margin: "-2rem 0 2rem 0" }}>
        <Typography variant="body2" component="p" sx={BoughtTextStyle}>
          <ul className="boughtList">
            <li>
              This Product: Microsoft Xbox One S Blue Grey –{" "}
              <span className="newPrice">$52.00</span>
            </li>
            <li>
              PC Gaming Mainboard B460 –{" "}
              <del className="previousPrice">$29.00</del>{" "}
              <span className="newPrice">$25.00</span>
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default BoughtTogether;
