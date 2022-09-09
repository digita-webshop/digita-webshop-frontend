import { Edit } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { ImageWrapper } from "../../../Styles/AddProduct";
import { CardWrapper, PFormLabel } from "../../../Styles/panelCommon";
import previewImg from "../../../Assets/Images/upload-preview.jpg";
import { ChangeEvent, useRef } from "react";

const imagesData = ["image1", "image2", "image3", "image4", "image5", "image6"];

function Gallery({ setAddedImages, addedImages }: any) {
  const mainImgRef = useRef<HTMLInputElement>(null);
  const imageContainerRef = useRef<HTMLInputElement>(null);

  const imageClickHandler = (index: number) => () => {
    const inputs = imageContainerRef?.current?.querySelectorAll("input");
    inputs![index].click();
  };

  const addImageHandler = async (
    event: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const file = event.target?.files![0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "digita");

    try {
      const response = await fetch(
        " https://api.cloudinary.com/v1_1/dmgb7kvmn/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setAddedImages((prev: any) => ({
        ...prev,
        [name]: data?.url,
      }));
      console.log(data);
    } catch (err) {
      console.log(err);
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
              onChange={(event) => addImageHandler(event, "main")}
            />
            <img
              src={addedImages?.main ? addedImages.main : previewImg}
              alt="product-img"
            />
            <Box onClick={() => mainImgRef.current!.click()}>
              <Edit />
            </Box>
          </ImageWrapper>
        </Grid>
        <Grid container item xs={12} sm={5} spacing={2} ref={imageContainerRef}>
          {imagesData.map((image, index) => (
            <Grid item xs={6} sm={6} display={"flex"} key={index}>
              <ImageWrapper>
                <input
                  type={"file"}
                  onChange={(event) => addImageHandler(event, image)}
                />
                <img
                  src={image in addedImages ? addedImages[image] : previewImg}
                  alt="product-img"
                />
                <Box onClick={imageClickHandler(index)}>
                  <Edit />
                </Box>
              </ImageWrapper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Gallery;
