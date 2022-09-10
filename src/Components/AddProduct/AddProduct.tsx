import { Grid } from "@mui/material";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { FormEvent, KeyboardEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../features/products/productsApi";
import {
  errorMessage,
  successMessage,
} from "../../Services/Utils/toastMessages";
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
const galleryInitialState = [
  { image: "" },
  { image: "" },
  { image: "" },
  { image: "" },
  { image: "" },
  { image: "" },
  { image: "" },
];
function AddProduct() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredSku, setEnteredSku] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("apple");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [enteredShortDesc, setEnteredShortDesc] = useState("");
  const [addedImages, setAddedImages] = useState<any>(galleryInitialState);
  const [enteredPrice, setEnteredPrice] = useState<number | string>("");
  const [enteredOffPrice, setEnteredOffPrice] = useState<number | string>("");
  const [enteredQuantity, setEnteredQuantity] = useState<number | string>("");
  const [tags, setTags] = useState<ITag[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState("audio & video game");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const { id }: any = useParams();
  const { data } = useGetProductQuery(id || "");
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    let tagList = tags.map((t) => t.name);

    let newProduct: any = {
      title: enteredTitle,
      image: addedImages[0]?.image,
      gallery: addedImages,
      price: +enteredPrice,
      offPrice: +enteredOffPrice,
      sku: enteredSku,
      tags: tagList,
      quantity: +enteredQuantity,
      colors: selectedColors,
      category: selectedCategory,
      shortDescription: enteredShortDesc,
      fullDescription: JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      ),
      rating: id ? data?.data.rating : 5,
    };
    if (id) {
      newProduct["_id"] = data?.data._id;
    }
    console.log(newProduct);
    console.log(newProduct._id);

    try {
      let response;
      if (id) {
        console.log("update");

        response = await updateProduct(newProduct).unwrap();
      } else {
        console.log("add");
        response = await addProduct(newProduct).unwrap();
      }
      console.log(response);
      successMessage(response?.message);
      navigate("/panel/products/list", { replace: true });
    } catch (err: any) {
      errorMessage(err.message);
      console.log(err);
    }
  };

  const checkKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Enter") event.preventDefault();
  };

  useEffect(() => {
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
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(product.fullDescription))
        )
      );
    }
  }, [data?.data]);
  return (
    <form onSubmit={onSubmit} onKeyDown={checkKeyDown}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ContentHeader title={`${id ? "edit" : "add"} product`} />
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

export default AddProduct;
