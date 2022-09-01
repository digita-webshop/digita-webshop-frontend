import { Grid } from "@mui/material";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../../../Services/Utils/Data/data";
import { CardWrapper, PFormLabel } from "../../../../Styles/panelCommon";

import ContentHeader from "../../../AddArticle/ContentHeader/ContentHeader";
import { ITag } from "../../../AddProduct/AddProduct";
import Details from "../../../AddProduct/Details/Details";
import Gallery from "../../../AddProduct/Gallery/Gallery";
import Sidebar from "../../../AddProduct/Sidebar/Sidebar";
import TextEditor from "../../../TextEditor/TextEditor";

function EditProduct() {
  const { id }: any = useParams();
  const product = productData.find((item) => item.id === +id);
  const {
    name,
    sku,
    brand,
    description,
    price,
    quantity,
    gallery,
    tags: tagArr,
    category,
    colors,
  } = product!;
  const [enteredTitle, setEnteredTitle] = useState(name);
  const [enteredSku, setEnteredSku] = useState(sku);
  const [selectedBrand, setSelectedBrand] = useState(brand);
  const [selectedColors, setSelectedColors] = useState(colors);
  const [enteredShortDesc, setEnteredShortDesc] = useState(description);
  const [addedImages, setAddedImages] = useState({});
  const [enteredPrice, setEnteredPrice] = useState<number | string>(price);
  const [enteredQuantity, setEnteredQuantity] = useState<number | string>(
    quantity
  );
  const tagsList = tagArr.map((tag, index) => {
    return { id: `${index}`, name: tag };
  });
  const [tags, setTags] = useState<ITag[]>(tagsList);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [fullDescription, setFullDescription] = useState<string>("");

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ContentHeader title={"edit product"} route={"/panel/products"} />
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
            <Gallery setAddedImages={setAddedImages} />
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

export default EditProduct;
