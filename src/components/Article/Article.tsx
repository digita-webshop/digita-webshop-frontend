import { useState } from "react";
import { Container, Button, Box, Grid, Typography } from "@mui/material";
import RecentPosts from "../Blog/Components/SideBar/RecentPosts/RecentPosts";
import RecentComments from "../Blog/Components/SideBar/RecentComments/RecentComments";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { posterStyle } from "../About/styles";
import ArticleDescription from "./Components/articleDescription/ArticleDescription";
import Divider from "@mui/material/Divider";
import { FormEvent } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { articleTitleStyles } from "./styles";
import ReplyForm from "./Components/ReplyForm/ReplyForm";
import { useGetArticleQuery } from "redux/articles/articlesApi";
import Loading from "../Loading/Loading";
import { getReadableDate } from "utils/getReadableDate";
import { convertFromRaw, Editor, EditorState } from "draft-js";
import Review from "../Product/Components/Tabs/Reviews/Review/Review";
import { useAddReviewMutation, useGetReviewsQuery } from "redux/reviews/reviewsApi";
import { useLoadReviews } from "hooks/useLoadReviews";
import { useAppSelector } from "redux/store";
import { Helmet } from "react-helmet-async";
import Error from "components/Error/Error";

function Article() {
  const { user } = useAppSelector((state) => state.reducer.auth);
  const [reviewDescription, setReviewDescription] = useState("");
  const { id }: any = useParams();
  const { pathname } = useLocation();
  const [addReview] = useAddReviewMutation();

  const { data: articleData, isLoading, isError } = useGetArticleQuery(id);
  const navigate = useNavigate();

  const { title, writer, image, category, description, createdAt } = articleData?.data ?? {};

  const date = getReadableDate(createdAt || "");

  const { data: reviewsData } = useGetReviewsQuery({
    path: "articles",
    id,
  });
  const reviews = reviewsData?.data ?? [];

  const { indexOfLoadedReviews, loadMoreReviewsHandler } = useLoadReviews(reviews);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (!user) {
      navigate({ pathname, hash: "reviews", search: `login=open` });
      return;
    }
    try {
      let response = await addReview({
        path: "articles",
        id,
        review: {
          rating: 5,
          description: reviewDescription,
        },
      }).unwrap();

      if (response.code === 200) {
        setReviewDescription("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <Loading full />;
  }
  if (isError) {
    return <Error />;
  }
  const contentState = convertFromRaw(JSON.parse(description || ""));
  const editorState = EditorState.createWithContent(contentState);
  return (
    <Box bgcolor={"white"}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Breadcrumbs title={"blog"} lastPath={title} category={category} />
      <Container>
        <Grid container sx={{ py: 6.25 }}>
          <Grid item md={8.5}>
            <Grid container px={"15px"} mb={"35px"}>
              <Typography variant="h2" component="h2" sx={articleTitleStyles}>
                {title}
              </Typography>
              <Grid container sx={{ mb: "20px" }}>
                <ArticleDescription author={String(writer)} category={String(category)} date={String(date)} />
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
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia
                placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies
                felis condimentum eget unc ornare susc
              </Typography>
              <Box>
                <Editor editorState={editorState} readOnly onChange={() => {}} />
              </Box>

              <Divider sx={{ width: "100%", margin: "35px 0" }} />
              {/* comments */}
              <Box width={"100%"}>
                <Typography fontWeight={500} marginBottom={4} variant="h6">
                  COMMENTS
                </Typography>
                {reviews?.length !== 0 ? (
                  reviews
                    ?.slice(0, indexOfLoadedReviews)
                    .map((review) => (
                      <Review
                        id={review._id!}
                        userId={review.userId}
                        rating={review.rating!}
                        description={review.description}
                        createdAt={review.createdAt!}
                      />
                    ))
                ) : (
                  <Box>
                    <Typography
                      component="p"
                      sx={{
                        color: "common.digitaGrey3",
                        fontSize: "16px",
                      }}
                    >
                      There is no review for this product, be the first reviewer
                    </Typography>
                    <Divider sx={{ width: "100%" }} />
                  </Box>
                )}
                {reviews.length > 6 && (
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ display: "block", margin: "10px 0 0 auto" }}
                    onClick={loadMoreReviewsHandler}
                  >
                    {indexOfLoadedReviews < reviews.length ? "Load More..." : "close"}
                  </Button>
                )}
              </Box>
              <Box width={"100%"} id="reviews" marginTop={4}>
                <Typography fontWeight={500} marginBottom={4} variant="h6">
                  LEAVE A COMMENT
                </Typography>
                <form onSubmit={submitHandler}>
                  <ReplyForm
                    user={user}
                    reviewDescription={reviewDescription}
                    setReviewDescription={setReviewDescription}
                  />
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
