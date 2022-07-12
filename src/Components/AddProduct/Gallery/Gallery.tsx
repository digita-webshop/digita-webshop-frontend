import { Edit } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { ImageWrapper } from "../../../Styles/AddProduct";
import { CardWrapper } from "../../../Styles/panelCommon";
import previewImg from "../../../Assets/Images/upload-preview.jpg";
import { useRef } from "react";

function Gallery() {
  const mainImgRef = useRef<HTMLInputElement>(null);
  const firstImgRef = useRef<HTMLInputElement>(null);
  const secondImgRef = useRef<HTMLInputElement>(null);
  const thirdImgRef = useRef<HTMLInputElement>(null);
  const fourthImgRef = useRef<HTMLInputElement>(null);

  const imageClickHandler = (name: string) => () => {
    switch (name) {
      case "main":
        mainImgRef.current!.click();
        break;
      case "first":
        firstImgRef.current!.click();
        break;
      case "second":
        secondImgRef.current!.click();
        break;
      case "third":
        thirdImgRef.current!.click();
        break;
      case "fourth":
        thirdImgRef.current!.click();
        break;
    }
  };
  return (
    <CardWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ImageWrapper className="main">
            <input type={"file"} ref={mainImgRef} />
            <img src={previewImg} alt="product-img" />
            <Box onClick={imageClickHandler("main")}>
              <Edit />
            </Box>
          </ImageWrapper>
        </Grid>
        <Grid container item xs={12} sm={5} spacing={2}>
          <Grid item xs={6} sm={6} display={"flex"}>
            <ImageWrapper>
              <input type={"file"} ref={firstImgRef} />
              <img src={previewImg} alt="product-img" />
              <Box onClick={imageClickHandler("first")}>
                <Edit />
              </Box>
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6} display={"flex"}>
            <ImageWrapper>
              <input type={"file"} ref={secondImgRef} />
              <img src={previewImg} alt="product-img" />
              <Box onClick={imageClickHandler("second")}>
                <Edit />
              </Box>
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <ImageWrapper>
              <input type={"file"} ref={thirdImgRef} />
              <img src={previewImg} alt="product-img" />
              <Box onClick={imageClickHandler("third")}>
                <Edit />
              </Box>
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <ImageWrapper>
              <input type={"file"} ref={fourthImgRef} />
              <img src={previewImg} alt="product-img" />
              <Box onClick={imageClickHandler("fourth")}>
                <Edit />
              </Box>
            </ImageWrapper>
          </Grid>
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Gallery;
