import CardImage from './Components/CardImage/CardImage';
import CardTitle from './Components/CardTitle/CardTitle';
import CardDescription from './Components/CardDescription/CardDescription';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
interface info {
  id: number;
  title: string;
  image: string;
  author: string;
  releaseDate: string;
  category: string;
}

function ArticleCard(props: info) {
  return (
    <Grid item xs={12} sm={6} px={'15px'} mb={'35px'}>
      <Card>
        <CardImage
          id={props.id}
          title={props.title}
          image={props.image}
        ></CardImage>
        <CardDescription
          id={props.id}
          author={props.author}
          date={props.releaseDate}
          category={props.category}
        ></CardDescription>
        <CardTitle id={props.id} title={props.title}></CardTitle>
      </Card>
    </Grid>
  );
}

export default ArticleCard;
