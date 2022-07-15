import { Grid } from "@mui/material";
import ContentHeader from "./ContentHeader/ContentHeader";

function AddArticle() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>
    </Grid>
  );
}

export default AddArticle;
