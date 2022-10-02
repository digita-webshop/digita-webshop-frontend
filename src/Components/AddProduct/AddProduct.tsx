import { Grid } from "@mui/material";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { FormEvent, KeyboardEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../features/products/productsApi";
import { errorMessage, successMessage } from "../../Utils/toastMessages";
import { IProduct } from "../../Services/Types/product";
import { CardWrapper, PFormLabel } from "../../Styles/panelCommon";
import TextEditor from "../TextEditor/TextEditor";
import ContentHeader from "./ContentHeader/ContentHeader";
import Details from "./Details/Details";
import Gallery from "./Gallery/Gallery";
import Sidebar from "./Sidebar/Sidebar";

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
  const [addedImages, setAddedImages] = useState<any>([{ image: "" }]);
  const [enteredPrice, setEnteredPrice] = useState<number | string>("");
  const [enteredOffPrice, setEnteredOffPrice] = useState<number | string>("");
  const [enteredQuantity, setEnteredQuantity] = useState<number | string>("");
  const [tags, setTags] = useState<ITag[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState("audio & video game");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [product, setProduct] = useState<IProduct>();

  const { id }: any = useParams();
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    let tagList = tags.map((t) => t.name);
    let galleryList = addedImages.filter((item: any) => item.image);

    let newProduct: IProduct = {
      title: enteredTitle,
      image: galleryList[0]?.image,
      gallery: galleryList,
      price: +enteredPrice,
      offPrice: +enteredOffPrice,
      sku: enteredSku,
      tags: tagList,
      quantity: +enteredQuantity,
      colors: selectedColors,
      category: selectedCategory,
      shortDescription: enteredShortDesc,
      brand: selectedBrand,
      fullDescription: JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      ),
      rating: id ? product?.rating! : 5,
    };
    if (id) {
      newProduct["_id"] = product?._id;
    }
    console.log(newProduct);

    try {
      let response;
      if (id) {
        response = await updateProduct(newProduct).unwrap();
      } else {
        response = await addProduct(newProduct).unwrap();
      }
      console.log(response);
      successMessage(response?.message);
      navigate("/panel/products/list", { replace: true });
    } catch (err: any) {
      console.log(err);
      errorMessage(err.message);
    }
  };

  const checkKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Enter") event.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products/find/${id}`).then((res) =>
          res.json()
        );
        const productData: IProduct = response?.data;
        setEnteredTitle(productData.title);
        setEnteredSku(productData.sku);
        setEnteredPrice(productData.price);
        setEnteredOffPrice(productData.offPrice);
        setSelectedColors(productData.colors);
        setEnteredShortDesc(productData.shortDescription);
        setSelectedCategory(productData.category);
        setAddedImages(productData.gallery);
        const tagList = productData.tags.map((tag: any, index: number) => {
          return { id: `${index}`, name: tag };
        });
        setTags(tagList);
        setEnteredQuantity(productData.quantity);
        setEditorState(
          EditorState.createWithContent(
            convertFromRaw(JSON.parse(productData.fullDescription))
          )
        );
        setProduct(productData);
      } catch (err: any) {
        errorMessage(err.message);
        console.log(err);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);
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
