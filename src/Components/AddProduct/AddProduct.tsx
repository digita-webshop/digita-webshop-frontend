import { Grid } from "@mui/material";
import { FormEvent, KeyboardEvent, useState } from "react";
import { useAddProductMutation } from "../../features/products/productsApi";
import { CardWrapper, PFormLabel } from "../../Styles/panelCommon";
import TextEditor from "../TextEditor/TextEditor";
import ContentHeader from "./ContentHeader/ContentHeader";
import Details from "./Details/Details";
import Gallery from "./Gallery/Gallery";
import Sidebar from "./Sidebar/Sidebar";

export interface IImages {
  main: string;
}
export interface ITag {
  id: string;
  name: string;
}

function AddProduct() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredSku, setEnteredSku] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("apple");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [enteredShortDesc, setEnteredShortDesc] = useState("");
  const [addedImages, setAddedImages] = useState<any>();
  const [enteredPrice, setEnteredPrice] = useState<number | string>("");
  const [enteredQuantity, setEnteredQuantity] = useState<number | string>("");
  const [tags, setTags] = useState<ITag[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState("audio & video game");
  const [fullDescription, setFullDescription] = useState<string>("");

  const [addProduct] = useAddProductMutation();

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    let galleryList = [];
    for (let img in addedImages) {
      galleryList.push({ image: JSON.stringify(addedImages[img]) });
    }

    const newProduct = {
      title: enteredTitle,
      image: JSON.stringify(addedImages?.main),
      gallery: galleryList,
      price: +enteredPrice,
      sku: enteredSku,
      tags,
      quantity: +enteredQuantity,
      colors: selectedColors,
      category: selectedCategory,
      shortDescription: enteredShortDesc,
      fullDescription,
    };
    console.log(newProduct);

    try {
      const data = await addProduct(newProduct);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const checkKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Enter") event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} onKeyDown={checkKeyDown}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ContentHeader title={"add product"} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} md={8}>
            <Details
              enteredTitle={enteredTitle}
              setEnteredTitle={setEnteredTitle}
              enteredSku={enteredSku}
              setEnteredSku={setEnteredSku}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              enteredShortDesc={enteredShortDesc}
              setEnteredShortDesc={setEnteredShortDesc}
            />
            <Gallery
              setAddedImages={setAddedImages}
              addedImages={addedImages}
            />
            <CardWrapper mt={4}>
              <PFormLabel sx={{ display: "block", ml: "5px", mb: "10px" }}>
                description
              </PFormLabel>
              <TextEditor setFullDescription={setFullDescription} />
            </CardWrapper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar
              enteredPrice={enteredPrice}
              setEnteredPrice={setEnteredPrice}
              enteredQuantity={enteredQuantity}
              setEnteredQuantity={setEnteredQuantity}
              tags={tags}
              setTags={setTags}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddProduct;
