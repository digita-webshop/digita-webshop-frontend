import ArticleCard from './Article/ArticleCard';
import { Grid } from '@mui/material';
import { articlesBlogPage } from '../../../../Services/Utils/Data/Data';

function Articles() {
  return (
    <Grid container>
      {articlesBlogPage.map(article => (
        <ArticleCard
          title={article.title}
          image={article.image}
          author={article.author}
          releaseDate={article.releaseDate}
          status={article.status}
        />
      ))}
    </Grid>
  );
}

export default Articles;
