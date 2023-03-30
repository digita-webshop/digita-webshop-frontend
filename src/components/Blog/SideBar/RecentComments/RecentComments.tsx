import { Typography, Skeleton, Box } from "@mui/material";
import RecentComment from "./RecentComment/RecentComment";
import { FilterTitleWrapper } from "components/Shop/styles";
import { useGetAllReviewsQuery } from "redux/reviews/reviewsApi";

function RecentComments() {
  const {
    data: reviewsData,
    isLoading,
    isError,
  } = useGetAllReviewsQuery({ path: "articles", queries: "page=0 &limit=4" });
  const reviews = reviewsData?.data ?? [];
  console.log(reviewsData);

  return (
    <Box
      sx={{
        border: "1px solid #e9e9e9",
        px: "20px",
        pt: "20px",
        pb: "30px",
        mb: "30px",
      }}
    >
      <FilterTitleWrapper className="underline">
        <Typography component={"h4"} variant="body1" color="primary" fontWeight={600}>
          RECENT COMMENTS
        </Typography>
      </FilterTitleWrapper>
      {!isLoading && !isError
        ? reviews.map((review) => (
            <RecentComment
              key={review._id!}
              id={review._id!}
              title={review?.articleId?.title}
              articleId={review.articleId._id!}
              userName={review?.userId?.userName ?? "deleted account "}
            />
          ))
        : Array(4)
            .fill(null)
            .map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  height: "40px",
                  marginTop: "14px",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
                key={index}
              >
                <Skeleton width={"100%"} height={20} variant="rectangular" />
                <Skeleton width={"40%"} height={15} variant="rectangular" />
              </Box>
            ))}
    </Box>
  );
}

export default RecentComments;
