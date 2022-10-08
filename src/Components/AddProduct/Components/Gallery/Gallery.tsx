import { Dispatch, SetStateAction } from "react";
import { Edit } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { ImageWrapper } from "@/components/AddProduct/styles";
import { CardWrapper, PFormLabel } from "@/styles/panel";
import previewImg from "@/assets/Images/upload-preview.jpg";
import { ChangeEvent, useRef } from "react";
import { errorMessage } from "@/utils/toastMessages";
import { uploadImage } from "@/utils/uploadImage";

interface Props {
  setAddedImages: Dispatch<SetStateAction<any>>;
  addedImages: any;
}
function Gallery({ setAddedImages, addedImages }: Props) {
  const mainImgRef = useRef<HTMLInputElement>(null);
  const imageContainerRef = useRef<HTMLInputElement>(null);

  const imageClickHandler = (index: number) => () => {
    const inputs = imageContainerRef?.current?.querySelectorAll("input");
    inputs![index].click();
  };

  const addImageHandler = async (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target?.files![0];

    try {
      const data = await uploadImage(file);
      setAddedImages((prev: any) => {
        let images = [...prev];
        if (!images[index]) {
          for (let i = addedImages.length - 1; i < 7; i++) {
            images.push({ image: "" });
          }
        }
        images[index] = { image: data?.url };
        return images;
      });
      console.log(data);
    } catch (err) {
      errorMessage("image upload failed");
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
              onChange={(event) => addImageHandler(event, 0)}
            />
            <img
              src={!!addedImages[0]?.image ? addedImages[0].image : previewImg}
              alt="product-img"
            />
            <Box onClick={() => mainImgRef.current!.click()}>
              <Edit />
            </Box>
          </ImageWrapper>
        </Grid>
        <Grid container item xs={12} sm={5} spacing={2} ref={imageContainerRef}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Grid item xs={6} sm={6} display={"flex"} key={index}>
              <ImageWrapper>
                <input
                  type={"file"}
                  className={`${index}`}
                  onChange={(event) => addImageHandler(event, index)}
                />
                <img
                  src={
                    !!addedImages[index]?.image
                      ? addedImages[index].image
                      : previewImg
                  }
                  alt="product-img"
                />
                <Box onClick={imageClickHandler(index - 1)}>
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
