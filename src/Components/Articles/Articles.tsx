import { Grid } from "@mui/material";
import ContentHeader from "./ContentHeader/ContentHeader";

const Articles = () => {
  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <ContentHeader />
      </Grid>

      
    </Grid>
  );
};

export default Articles;
