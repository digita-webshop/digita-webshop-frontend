import { FormEvent } from "react";
import { Grid } from "@mui/material";
import ArticleForm from "./ArticleForm/ArticleForm";
import ContentHeader from "./ContentHeader/ContentHeader";
import { useState } from "react";
import { useAddArticleMutation } from "../../features/articles/articlesApi";

function AddArticle() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [enteredWriter, setEnteredWriter] = useState("");
  const [addedImage, setAddedImage] = useState<any>("no chosen file");

  const [addArticle] = useAddArticleMutation();
  const discardChangesHandler = () => {
    setEnteredTitle("");
    setEnteredWriter("");
    setAddedImage("no chosen file");
  };
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const newArticle = {
      title: enteredTitle,
      writer: enteredWriter,
      image: addedImage,
      description: fullDescription,
    };

    console.log(newArticle);
    try {
      const data = await addArticle(newArticle).unwrap();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Grid container maxWidth={"768px"} margin={"auto"} rowSpacing={3}>
        <Grid item xs={12}>
          <ContentHeader
            title={"add article"}
            route={"/panel/articles/add"}
            discardChangesHandler={discardChangesHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <ArticleForm
            enteredTitle={enteredTitle}
            enteredWriter={enteredWriter}
            setEnteredWriter={setEnteredWriter}
            setEnteredTitle={setEnteredTitle}
            fullDescription={fullDescription}
            setFullDescription={setFullDescription}
            addedImage={addedImage}
            setAddedImage={setAddedImage}
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default AddArticle;
