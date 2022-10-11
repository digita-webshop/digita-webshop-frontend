import { Fragment } from "react";
import { boughtTogether, boughttitleStyle, boughtPriceStyle, BoughtTextStyle, BoughtButton } from "../../styles";
import { Button, Box, Typography, Divider } from "@mui/material";
import { Card, CardMedia, CardActionArea } from "@mui/material";
import { IProduct } from "types/product";
import { useNavigate } from "react-router-dom";
interface Props {
  products: IProduct[];
}
const BoughtTogether = ({ products }: Props) => {
  const navigate = useNavigate();
  const index = Math.floor(Math.random() * products?.length - 3);
  const randomProducts = products?.slice(index, index + 2);
  return (
    <Box sx={boughtPriceStyle}>
      <Typography variant="h3" component="h3" sx={boughttitleStyle}>
        FREQUENTLY BOUGHT TOGETHER
      </Typography>
      <Divider sx={{ fontSize: "100px", fontWeight: "900" }} />

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Box sx={boughtTogether}>
          {randomProducts.map((product, index) => (
            <Fragment key={index}>
              {index !== 0 && (
                <Typography variant="body2" component="span" sx={BoughtTextStyle}>
                  +
                </Typography>
              )}
              <Box onClick={() => navigate(`/shop/${product._id}`)}>
                <Card sx={{ border: " 1px solid #ebebeb", margin: "0 0.5rem " }}>
                  <CardActionArea>
                    <CardMedia component="img" height="96" width="96" image={product.image} alt="green iguana" />
                  </CardActionArea>
                </Card>
              </Box>
            </Fragment>
          ))}
        </Box>
        <Box>
          <Typography sx={{ marginTop: "20px", fontSize: "14px" }}>
            Price for all: <span className="newPrice">$77.00</span>
          </Typography>
          <Button sx={BoughtButton} variant="contained" color="error">
            Add All To Cart
          </Button>
        </Box>
      </Box>

      <Box sx={BoughtTextStyle}>
        <ul className="boughtList">
          {randomProducts.map(({ title, price, offPrice }) => (
            <li key={title}>
              {title} –{offPrice && <del className="previousPrice">{`$${price}`}</del>}
              <span className="newPrice">{`$${offPrice ? offPrice : price}`}</span>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default BoughtTogether;
