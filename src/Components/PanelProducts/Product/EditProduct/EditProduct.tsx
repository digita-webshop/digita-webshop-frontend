import { Grid } from "@mui/material";
import { EditorState } from "draft-js";
import { FormEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../../features/products/productsApi";
import { CardWrapper, PFormLabel } from "../../../../Styles/panelCommon";

import ContentHeader from "../../../AddArticle/ContentHeader/ContentHeader";
import { ITag } from "../../../AddProduct/AddProduct";
import Details from "../../../AddProduct/Details/Details";
import Gallery from "../../../AddProduct/Gallery/Gallery";
import Sidebar from "../../../AddProduct/Sidebar/Sidebar";
import TextEditor from "../../../TextEditor/TextEditor";

function EditProduct() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredSku, setEnteredSku] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [enteredShortDesc, setEnteredShortDesc] = useState("");
  const [addedImages, setAddedImages] = useState<any>({});
  const [enteredPrice, setEnteredPrice] = useState<number | string>("");
  const [enteredOffPrice, setEnteredOffPrice] = useState<number | string>("");
  const [enteredQuantity, setEnteredQuantity] = useState<number | string>("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [tags, setTags] = useState<ITag[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { id }: any = useParams();
  console.log(id);

  const { data } = useGetProductQuery(id);
  console.log(data);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  useEffect(() => {
    console.log(data?.data);

    if (data?.data) {
      const product = data?.data;
      setEnteredTitle(product.title);
      setEnteredSku(product.sku);
      setEnteredPrice(product.price);
      setEnteredOffPrice(product.offPrice);
      setSelectedColors(product.colors);
      setEnteredShortDesc(product.shortDescription);
      setSelectedCategory(product.category);
      setAddedImages(product.gallery);
      const tagList = product.tags.map((tag, index) => {
        return { id: `${index}`, name: tag };
      });
      setTags(tagList);
      setEnteredQuantity(product.quantity);
    }
  }, [data?.data]);

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
            <Gallery
              setAddedImages={setAddedImages}
              addedImages={addedImages}
            />
            <CardWrapper mt={4}>
              <PFormLabel sx={{ display: "block", ml: "5px", mb: "10px" }}>
                description
              </PFormLabel>
              <TextEditor
                editorState={editorState}
                setEditorState={setEditorState}
              />
            </CardWrapper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar
              enteredPrice={enteredPrice}
              setEnteredPrice={setEnteredPrice}
              enteredOffPrice={enteredOffPrice}
              setEnteredOffPrice={setEnteredOffPrice}
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
