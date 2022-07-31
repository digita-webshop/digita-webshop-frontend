import { Grid } from "@mui/material";
import { FormEvent, useState } from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import Description from "./Description/Description";
import Details from "./Details/Details";
import Gallery from "./Gallery/Gallery";
import Sidebar from "./Sidebar/Sidebar";

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
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ContentHeader />
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
            <Gallery />
            <Description />
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddProduct;
