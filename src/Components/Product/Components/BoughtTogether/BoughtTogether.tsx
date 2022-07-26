import {
  boughtTogether,
  boughttitleStyle,
  boughtPriceStyle,
  BoughtTextStyle,
  BoughtButton,
} from "../../../../Styles/Product";

import { Button, Box, Typography, Divider } from "@mui/material";

import { Card, CardMedia, CardActionArea } from "@mui/material";
import { productData } from "../../../../Services/Utils/Data/data";
import { Fragment } from "react";

const BoughtTogether = () => {
  return (
    <Box sx={boughtPriceStyle}>
      <Typography variant="h3" component="h3" sx={boughttitleStyle}>
        FREQUENTLY BOUGHT TOGETHER
      </Typography>
      <Divider sx={{ fontSize: "100px", fontWeight: "900" }} />

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Box sx={boughtTogether}>
          {/* ===========================imageBought================ */}
          {productData.slice(1, 3).map((product, index) => (
            <Fragment>
              {index !== 0 && (
                <Typography
                  variant="body2"
                  component="span"
                  sx={BoughtTextStyle}
                >
                  +
                </Typography>
              )}
              <Box>
                <Card
                  sx={{ border: " 1px solid #ebebeb", margin: "0 0.5rem " }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="96"
                      width="96"
                      image={product.image}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </Box>
            </Fragment>
          ))}
        </Box>
        {/* ===========================allBought================ */}
        <Box>
          <Typography sx={{ marginTop: "20px", fontSize: "14px" }}>
            Price for all: <span className="newPrice">$77.00</span>
          </Typography>
          <Button sx={BoughtButton} variant="contained" color="error">
            Add All To Cart
          </Button>
        </Box>
      </Box>

      <Box>
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
