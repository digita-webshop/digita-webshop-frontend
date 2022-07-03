import Card from '@mui/material/Card';
import PostImage from './Components/PostImage/PostImage';
import PostContent from './Components/PostContent/PostContent';

interface info {
  id: number;
  title: string;
  image: string;
  date: string;
}

function RecentPost(props: info) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <PostImage id={props.id} title={props.image} image={props.image} />
      <PostContent id={props.id} title={props.title} date={props.date} />
    </Card>
  );
}

export default RecentPost;
