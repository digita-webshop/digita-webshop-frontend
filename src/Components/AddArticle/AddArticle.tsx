import { Grid } from "@mui/material";
import ArticleForm from "./ArticleForm/ArticleForm";
import ContentHeader from "./ContentHeader/ContentHeader";

function AddArticle() {
  return (
    <Grid container maxWidth={"768px"} margin={"auto"} rowSpacing={3}>
      <Grid item xs={12}>
        <ContentHeader title={"add article"} route={"/panel/add-product"} />
      </Grid>
      <Grid item xs={12}>
        <ArticleForm />
      </Grid>
    </Grid>
  );
}

export default AddArticle;
