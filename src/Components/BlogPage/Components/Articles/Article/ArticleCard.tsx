import CardImage from './Components/CardImage/CardImage';
import CardTitle from './Components/CardTitle/CardTitle';
import CardDescription from './Components/CardDescription/CardDescription';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';

interface info {
  title: string;
  image: string;
  author: string;
  releaseDate: string;
  status: string;
}

function ArticleCard(props: info) {
  return (
    <Grid item xs={12} sm={6} px={'15px'} mb={'35px'}>
      <Card>
        {/* card image */}
        <CardImage title={props.title} image={props.image}></CardImage>
        {/* card description */}
        <CardDescription
          author={props.author}
          date={props.releaseDate}
          status={props.status}
        ></CardDescription>
        {/* card title */}
        <CardTitle title={props.title}></CardTitle>
      </Card>
    </Grid>
  );
}

export default ArticleCard;
