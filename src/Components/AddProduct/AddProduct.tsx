import { Grid } from "@mui/material";
import { FormEvent, useState } from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import Description from "./Description/Description";
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
  const [selectedColors, setSelectedColors] = useState({
    first: "#f03637",
    second: "#18e37d",
    third: "#4169e1",
  });
  const [enteredShortDesc, setEnteredShortDesc] = useState("");
  const [addedImages, setAddedImages] = useState({});
  const [enteredPrice, setEnteredPrice] = useState(0);
  const [enteredQuantity, setEnteredQuantity] = useState(0);
  const [tags, setTags] = useState<ITag[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(tags);
  };

  return (
    <form onSubmit={submitHandler}>
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
            <Gallery setAddedImages={setAddedImages} />
            <Description />
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar
              enteredPrice={enteredPrice}
              setEnteredPrice={setEnteredPrice}
              enteredQuantity={enteredQuantity}
              setEnteredQuantity={setEnteredQuantity}
              tags={tags}
              setTags={setTags}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddProduct;
