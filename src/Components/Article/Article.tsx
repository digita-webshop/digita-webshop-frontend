import { Box, Grid, Typography } from "@mui/material";
import SearchBar from "../Blog/Components/SideBar/SearchBar/SearchBar";
import RecentPosts from "../Blog/Components/SideBar/RecentPosts/RecentPosts";
import RecentComments from "../Blog/Components/SideBar/RecentComments/RecentComments";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { articlesBlogPage } from "../../Services/Utils/Data/data";
import { posterStyle } from "../../Styles/About";
import ArticleDescription from "./articleDescription/ArticleDescription";
import Divider from "@mui/material/Divider";
import Contents from "./Contents/Contents";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { articleTitleStyles } from "../../Styles/Article";
import ReplyForm from "./ReplyForm/ReplyForm";

function Article() {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  const { id }: any = useParams();
  const article = articlesBlogPage.find((article) => article.id === +id);

  return (
    <Box bgcolor={"white"}>
      <Breadcrumbs title={"blog"} lastPath={article?.title} />
      <Grid container sx={{ py: 6.25, maxWidth: "1200px", mx: "auto", my: 0 }}>
        <Grid item md={9}>
          <Grid container px={"15px"} mb={"35px"}>
            <Typography variant="h2" component="h2" sx={articleTitleStyles}>
              {article?.title}
            </Typography>
            <Grid container sx={{ mb: "20px" }}>
              <ArticleDescription
                author={String(article?.author)}
                category={String(article?.category)}
                id={+id}
                date={String(article?.releaseDate)}
              />
            </Grid>
            <Box
              component="img"
              sx={posterStyle}
              src={article?.image}
              height="600px"
              maxWidth={"820px"}
              maxHeight={"600px"}
              marginBottom={"20px"}
            />
            <Typography color={"#f03637"} mb={"20px"}>
              Maecenas eget congue augue. Sed mollis tempor velit, et tempor
              justo cursus vel. Phasellus lacinia placerat lacus, vulputate
              volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non
              ultricies felis condimentum eget unc ornare susc
            </Typography>
            <Contents />
            <Contents />
            {/* TODO: add design is the silent section */}
            <Grid container sx={{ mb: "20px" }}></Grid>
            <Contents />
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
        <Grid item xs={12} md={3}>
          <Grid sx={{ ml: "15px" }}>
            <SearchBar />
            <RecentPosts />
            <RecentComments />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Article;
