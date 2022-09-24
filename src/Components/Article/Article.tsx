import { Container, Box, Grid, Typography } from "@mui/material";
import SearchBar from "../Blog/Components/SideBar/SearchBar/SearchBar";
import RecentPosts from "../Blog/Components/SideBar/RecentPosts/RecentPosts";
import RecentComments from "../Blog/Components/SideBar/RecentComments/RecentComments";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { posterStyle } from "../../Styles/About";
import ArticleDescription from "./articleDescription/ArticleDescription";
import Divider from "@mui/material/Divider";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { articleTitleStyles } from "../../Styles/Article";
import ReplyForm from "./ReplyForm/ReplyForm";
import { useGetArticleQuery } from "../../features/articles/articlesApi";
import Loading from "../Loading/Loading";
import { getReadableDate } from "../../Services/Utils/getReadableDate";
import { convertFromRaw, Editor, EditorState } from "draft-js";

function Article() {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  const { id }: any = useParams();
  const { data: articleData, isLoading } = useGetArticleQuery(id);
  const { title, writer, image, category, description, createdAt } =
    articleData?.data ?? {};
  const date = getReadableDate(createdAt || "");

  if (isLoading) {
    return <Loading full />;
  }
  const contentState = convertFromRaw(JSON.parse(description || ""));
  const editorState = EditorState.createWithContent(contentState);
  return (
    <Box bgcolor={"white"}>
      <Breadcrumbs title={"blog"} lastPath={title} category={category} />
      <Container>
        <Grid container sx={{ py: 6.25 }}>
          <Grid item md={8.5}>
            <Grid container px={"15px"} mb={"35px"}>
              <Typography variant="h2" component="h2" sx={articleTitleStyles}>
                {title}
              </Typography>
              <Grid container sx={{ mb: "20px" }}>
                <ArticleDescription
                  author={String(writer)}
                  category={String(category)}
                  date={String(date)}
                />
              </Grid>
              <Box
                component="img"
                sx={posterStyle}
                src={image}
                height="600px"
                maxWidth={"820px"}
                maxHeight={"600px"}
                marginBottom={"20px"}
              />
              <Typography color={"#f03637"} mb={"20px"}>
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                non ultricies felis condimentum eget unc ornare susc
              </Typography>
              <Box>
                <Editor
                  editorState={editorState}
                  readOnly
                  onChange={() => {}}
                />
              </Box>

              <Divider sx={{ width: "100%", margin: "35px 0" }} />
              {/* comments */}
              <Box width={"100%"}>
                <Typography fontWeight={500} marginBottom={4} variant="h6">
                  LEAVE A COMMENT
                </Typography>
                <form onSubmit={submitHandler}>
                  <ReplyForm />
                </form>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Grid sx={{ ml: "15px" }}>
              <RecentPosts />
              <RecentComments />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Article;
