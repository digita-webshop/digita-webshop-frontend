import { FormEvent } from "react";
import { Grid } from "@mui/material";
import ArticleForm from "./ArticleForm/ArticleForm";
import ContentHeader from "./ContentHeader/ContentHeader";
import { useState } from "react";
import { useAddArticleMutation } from "../../features/articles/articlesApi";
import { CardWrapper, PFormLabel } from "../../Styles/panelCommon";
import TextEditor from "../TextEditor/TextEditor";
import { convertToRaw, EditorState } from "draft-js";

function AddArticle() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredWriter, setEnteredWriter] = useState("");
  const [addedImage, setAddedImage] = useState<any>("no chosen file");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [addArticle] = useAddArticleMutation();

  const discardHandler = () => {
    setEnteredTitle("");
    setEnteredWriter("");
    setAddedImage("no chosen file");
    setEditorState(EditorState.createEmpty());
  };
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const newArticle = {
      title: enteredTitle,
      writer: enteredWriter,
      image: addedImage,
      description: JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      ),
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
            discardHandler={discardHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <CardWrapper>
            <Grid container spacing={3}>
              <ArticleForm
                enteredTitle={enteredTitle}
                enteredWriter={enteredWriter}
                setEnteredWriter={setEnteredWriter}
                setEnteredTitle={setEnteredTitle}
                addedImage={addedImage}
                setAddedImage={setAddedImage}
              />
              <Grid item xs={12}>
                <PFormLabel sx={{ display: "block", ml: "5px", mb: "10px" }}>
                  description
                </PFormLabel>
                <TextEditor
                  editorState={editorState}
                  setEditorState={setEditorState}
                />
              </Grid>
            </Grid>
          </CardWrapper>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddArticle;
