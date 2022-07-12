import { Edit } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { ImageWrapper } from "../../../Styles/AddProduct";
import { CardWrapper } from "../../../Styles/panelCommon";
import previewImg from "../../../Assets/Images/upload-preview.jpg";

function Gallery() {
  return (
    <CardWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ImageWrapper className="main">
            <input type={"file"} />
            <img src={previewImg} alt="product-img" />
            <Edit />
          </ImageWrapper>
        </Grid>
        <Grid container item xs={12} sm={5} spacing={2}>
          <Grid item xs={6} sm={6} display={"flex"}>
            <ImageWrapper>
              <input type={"file"} />
              <img src={previewImg} alt="product-img" />
              <Edit />
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6} display={"flex"}>
            <ImageWrapper>
              <input type={"file"} />
              <img src={previewImg} alt="product-img" />
              <Edit />
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <ImageWrapper>
              <input type={"file"} />
              <img src={previewImg} alt="product-img" />
              <Edit />
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <ImageWrapper>
              <input type={"file"} />
              <img src={previewImg} alt="product-img" />
              <Edit />
            </ImageWrapper>
          </Grid>
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Gallery;
