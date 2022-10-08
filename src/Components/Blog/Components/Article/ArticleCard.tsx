import CardImage from "./Components/CardImage/CardImage";
import CardTitle from "./Components/CardTitle/CardTitle";
import CardDescription from "./Components/CardDescription/CardDescription";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
interface Props {
  id: string;
  title: string;
  image: string;
  writer: string;
  createdAt: string;
  category: string;
}

function ArticleCard(props: Props) {
  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <CardImage id={props.id} title={props.title} image={props.image} />
        <CardDescription
          id={props.id}
          writer={props.writer}
          createdAt={props.createdAt}
          category={props.category}
        />
        <CardTitle id={props.id} title={props.title} />
      </Card>
    </Grid>
  );
}

export default ArticleCard;
