import { Edit } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { ImageWrapper } from "../../../Styles/AddProduct";
import { CardWrapper, PFormLabel } from "../../../Styles/panelCommon";
import previewImg from "../../../Assets/Images/upload-preview.jpg";
import { useRef } from "react";

function Gallery({ setAddedImages }: any) {
  const mainImgRef = useRef<HTMLInputElement>(null);
  const firstImgRef = useRef<HTMLInputElement>(null);
  const secondImgRef = useRef<HTMLInputElement>(null);
  const thirdImgRef = useRef<HTMLInputElement>(null);
  const fourthImgRef = useRef<HTMLInputElement>(null);
  const fifthImgRef = useRef<HTMLInputElement>(null);
  const sixthImgRef = useRef<HTMLInputElement>(null);

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
      case "fifth":
        fifthImgRef.current!.click();
        break;
      case "sixth":
        sixthImgRef.current!.click();
        break;
    }
  };
  console.log(firstImgRef.current?.files);
  const addImageHandler = (name: string) => () => {
    switch (name) {
      case "main":
        setAddedImages((prev: any) => ({
          ...prev,
          main: mainImgRef.current?.files![0],
        }));
        break;
      case "first":
        setAddedImages((prev: any) => ({
          ...prev,
          first: firstImgRef.current?.files![0],
        }));
        break;
      case "second":
        setAddedImages((prev: any) => ({
          ...prev,
          second: secondImgRef.current?.files![0],
        }));
        break;
      case "third":
        setAddedImages((prev: any) => ({
          ...prev,
          third: thirdImgRef.current?.files![0],
        }));
        break;
      case "fourth":
        setAddedImages((prev: any) => ({
          ...prev,
          fourth: fourthImgRef.current?.files![0],
        }));
        break;
      case "fifth":
        setAddedImages((prev: any) => ({
          ...prev,
          fifth: fifthImgRef.current?.files![0],
        }));
        break;
      case "sixth":
        setAddedImages((prev: any) => ({
          ...prev,
          sixth: sixthImgRef.current?.files![0],
        }));
        break;
    }
  };
  return (
    <CardWrapper mt={4}>
      <PFormLabel sx={{ display: "block", ml: "5px", mb: "10px" }}>
        images
      </PFormLabel>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7} display={"flex"}>
          <ImageWrapper className="main">
            <input
              type={"file"}
              ref={mainImgRef}
              onChange={addImageHandler("main")}
            />
            <img src={previewImg} alt="product-img" />
            <Box onClick={imageClickHandler("main")}>
              <Edit />
            </Box>
          </ImageWrapper>
        </Grid>
        <Grid container item xs={12} sm={5} spacing={2}>
          <Grid item xs={6} sm={6} display={"flex"}>
            <ImageWrapper>
              <input
                type={"file"}
                ref={firstImgRef}
                onChange={addImageHandler("first")}
              />
              <img src={previewImg} alt="product-img" />
              <Box onClick={imageClickHandler("first")}>
                <Edit />
              </Box>
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6} display={"flex"}>
            <ImageWrapper>
              <input
                type={"file"}
                ref={secondImgRef}
                onChange={addImageHandler("second")}
              />
              <img src={previewImg} alt="product-img" />
              <Box onClick={imageClickHandler("second")}>
                <Edit />
              </Box>
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6} display={"flex"}>
            <ImageWrapper>
              <input
                type={"file"}
                ref={thirdImgRef}
                onChange={addImageHandler("third")}
              />
              <img src={previewImg} alt="product-img" />
              <Box onClick={imageClickHandler("third")}>
                <Edit />
              </Box>
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6} display={"flex"}>
            <ImageWrapper>
              <input
                type={"file"}
                ref={fourthImgRef}
                onChange={addImageHandler("fourth")}
              />
              <img src={previewImg} alt="product-img" />
              <Box onClick={imageClickHandler("fourth")}>
                <Edit />
              </Box>
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6} display={"flex"}>
            <ImageWrapper>
              <input
                type={"file"}
                ref={fifthImgRef}
                onChange={addImageHandler("fifth")}
              />
              <img src={previewImg} alt="product-img" />
              <Box onClick={imageClickHandler("third")}>
                <Edit />
              </Box>
            </ImageWrapper>
          </Grid>
          <Grid item xs={6} sm={6} display={"flex"}>
            <ImageWrapper>
              <input
                type={"file"}
                ref={sixthImgRef}
                onChange={addImageHandler("sixth")}
              />
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
