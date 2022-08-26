import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { shopMenuCategories } from "../../../../../Services/Utils/Data/data";
import { ShopSubTitle } from "../../../../../Styles/Appbar";

function ShopMenuFeature() {
  const navigate = useNavigate();

  const clickHandler = (name: string) => () => {
    navigate(`/shop/?category=${name}`);
  };
  return (
    <Fragment>
      <Typography
        textTransform={"uppercase"}
        color="primary"
        fontWeight={600}
        sx={{ marginLeft: "10%", marginBottom: "15px" }}
      >
        feature by category
      </Typography>
      <Grid container>
        {shopMenuCategories.map((item) => (
          <Grid key={item.id} item xs={4} marginBottom={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                img: { width: { md: "80px", lg: "100px" }, cursor: "pointer" },

                marginBottom: "5px",
              }}
              onClick={clickHandler(item.name)}
            >
              <img src={`${item.img}`} alt="category-img" />
            </Box>

            <ShopSubTitle
              sx={{
                textAlign: "center",
                width: "70%",
                margin: "auto",
                lineHeight: "1.2",
                cursor: "pointer",
              }}
              onClick={clickHandler(item.name)}
            >
              {item.name}
            </ShopSubTitle>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

export default ShopMenuFeature;
