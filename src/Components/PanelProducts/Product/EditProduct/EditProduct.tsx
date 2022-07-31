import { Close } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { productData } from "../../../../Services/Utils/Data/data";
import {
  PButton,
  POutlinedButton,
  PTitle,
} from "../../../../Styles/panelCommon";
import { ITag } from "../../../AddProduct/AddProduct";
import Description from "../../../AddProduct/Description/Description";
import Details from "../../../AddProduct/Details/Details";
import Gallery from "../../../AddProduct/Gallery/Gallery";
import Sidebar from "../../../AddProduct/Sidebar/Sidebar";

interface Props {
  setOpenEdit: Dispatch<SetStateAction<boolean>>;
  id: number;
}
function EditProduct({ setOpenEdit, id }: Props) {
  const product = productData.find((item) => item.id === id);
  const {
    name,
    sku,
    brand,
    description,
    price,
    quantity,
    gallery,
    tags: tagList,
    category,
  } = product!;
  const [enteredTitle, setEnteredTitle] = useState(name);
  const [enteredSku, setEnteredSku] = useState(sku);
  const [selectedBrand, setSelectedBrand] = useState(brand);
  const [selectedColors, setSelectedColors] = useState({
    first: "#f03637",
    second: "#18e37d",
    third: "#4169e1",
  });
  const [enteredShortDesc, setEnteredShortDesc] = useState(description);
  const [addedImages, setAddedImages] = useState({});
  const [enteredPrice, setEnteredPrice] = useState<number | string>(price);
  const [enteredQuantity, setEnteredQuantity] = useState<number | string>(
    quantity
  );
  const [tags, setTags] = useState<ITag[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(tags);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        height: "90%",
        overflow: "auto",
        backgroundColor: "#eeeeee",
      }}
    >
      <form onSubmit={submitHandler}>
        <Grid container spacing={4} padding={4}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <PTitle>edit Product</PTitle>
              <Box sx={{ display: "flex", width: { xs: "100%", sm: "unset" } }}>
                <POutlinedButton
                  variant="contained"
                  sx={{ width: "50%", paddingLeft: "11px" }}
                  onClick={() => setOpenEdit(false)}
                >
                  <Close fontSize={"small"} />
                  discard
                </POutlinedButton>
                <PButton
                  variant="contained"
                  sx={{ width: "50%", marginLeft: "10px" }}
                  type={"submit"}
                >
                  publish
                </PButton>
              </Box>
            </Box>
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
    </Box>
  );
}

export default EditProduct;
