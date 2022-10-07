import { Grid } from "@mui/material";
import ArticleForm from "./ArticleForm/ArticleForm";
import ContentHeader from "./ContentHeader/ContentHeader";
import { useState, FormEvent, useEffect } from "react";
import {
  useAddArticleMutation,
  useUpdateArticleMutation,
} from "../../features/articles/articlesApi";
import { CardWrapper, PFormLabel } from "../../Styles/panelCommon";
import TextEditor from "../TextEditor/TextEditor";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { errorMessage, successMessage } from "../../Utils/toastMessages";
import { useNavigate, useParams } from "react-router-dom";
import { IArticle } from "../../Services/Types/article";

function AddArticle() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredWriter, setEnteredWriter] = useState("");
  const [addedImage, setAddedImage] = useState<any>("no chosen file");
  const [selectedCategory, setSelectedCategory] = useState("information");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const navigate = useNavigate();
  const { id }: any = useParams();
  const [addArticle] = useAddArticleMutation();
  const [updateArticle] = useUpdateArticleMutation();

  const discardHandler = () => {
    setEnteredTitle("");
    setEnteredWriter("");
    setAddedImage("no chosen file");
    setEditorState(EditorState.createEmpty());
    setSelectedCategory("information");
  };
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    let newArticle: IArticle = {
      title: enteredTitle,
      writer: enteredWriter,
      image: addedImage,
      category: selectedCategory,
      description: JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      ),
    };
    if (id) {
      newArticle["_id"] = id;
    }
    try {
      let response;
      if (id) {
        response = await updateArticle(newArticle).unwrap();
      } else {
        response = await addArticle(newArticle).unwrap();
      }
      successMessage(response.message);
      navigate("/panel/articles/list", { replace: true });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/articles/find/${id}`).then((res) =>
          res.json()
        );
        const articleData = response?.data;
        setEnteredTitle(articleData.title);
        setEnteredWriter(articleData.writer);
        setAddedImage(articleData.image);
        setEditorState(
          EditorState.createWithContent(
            convertFromRaw(JSON.parse(articleData.description))
          )
        );
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
    <Grid
      container
      component="form"
      onSubmit={submitHandler}
      maxWidth={"768px"}
      margin={"auto"}
      rowSpacing={3}
    >
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
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
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
  );
}

export default AddArticle;
