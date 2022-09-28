import {
  ProductContentStyle,
  SubmitButton,
} from "../../../../../Styles/Product";
import { PFormControl } from "../../../../../Styles/panelCommon";

import {
  Typography,
  Box,
  Rating,
  Divider,
  Button,
  FormLabel,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import Review from "./Review/Review";
import { useAppSelector } from "../../../../../store";
import { useLocation, useNavigate } from "react-router-dom";
import { useAddReviewMutation } from "../../../../../features/reviews/reviewsApi";
import { IReviews } from "../../../../../Services/Types/product";
import { useLoadReviews } from "../../../../../hooks/useLoadReviews";

interface Props {
  reviews: IReviews[] | [];
  id: string;
}
const Reviews = ({ reviews, id }: Props) => {
  const { user } = useAppSelector((state) => state.reducer.auth);
  const [rating, setRating] = useState(1);
  const [reviewDescription, setReviewDescription] = useState("");
  const { indexOfLoadedReviews, loadMoreReviewsHandler } =
    useLoadReviews(reviews);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const [addReview] = useAddReviewMutation();

  const submitReviewHandler = async () => {
    if (!user) {
      navigate({
        pathname,
        hash: "reviews",
        search: `tab=reviews&login=open`,
      });
      return;
    }
    try {
      let response = await addReview({
        path: "products",
        id,
        review: {
          rating,
          description: reviewDescription,
        },
      }).unwrap();
      console.log(response);
      if (response.code === 200) {
        setReviewDescription("");
        setRating(1);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(document.getElementById(hash.replace("#", "")));

    document.getElementById(hash.replace("#", ""))?.scrollIntoView({
      behavior: "smooth",
    });
    // window.scroll({
    //   top: 200,
    //   left: 0,
    //   behavior: "smooth",
    // });
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} id="reviews">
      <Box sx={ProductContentStyle}>
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
        <Typography
          component="p"
          sx={{
            color: "common.digitaGrey3",
            fontSize: "14px",
            marginTop: "20px",
          }}
        >
          Add a review
        </Typography>

        <Box mb={2}>
          <Typography
            component="p"
            sx={{
              color: "common.digitaGrey3",
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "5px",
            }}
          >
            Your rating
            <Typography
              component={"span"}
              sx={{ color: "#f03637", marginLeft: "2px" }}
            >
              *
            </Typography>
          </Typography>

          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[1, 2, 3, 4, 5].map((rate) => (
              <>
                {rate !== 1 && (
                  <Divider orientation="vertical" variant="middle" flexItem />
                )}
                <Box
                  sx={{
                    cursor: "pointer",
                    "& .MuiRating-root": {
                      color: rate === rating ? "#faaf00" : "common.digitaGrey6",
                    },
                    "&:hover .MuiRating-root": { color: "#faaf00" },
                  }}
                  onClick={() => setRating(rate)}
                >
                  <Rating
                    name="read-only"
                    defaultValue={rate}
                    readOnly
                    max={rate}
                  />
                </Box>
              </>
            ))}
          </Box>
        </Box>

        <Box>
          <PFormControl>
            <FormLabel
              color="primary"
              sx={{ fontSize: "15px", color: "#333333", marginBottom: "5px" }}
            >
              Your review
              <Typography
                component={"span"}
                sx={{ color: "#f03637", marginLeft: "2px" }}
              >
                *
              </Typography>
            </FormLabel>
            <TextField
              multiline
              rows={6}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "common.digitaGrey6",
                },
              }}
              value={reviewDescription}
              onChange={(e) => setReviewDescription(e.target.value)}
            />
          </PFormControl>
        </Box>

        <Button
          variant="contained"
          sx={SubmitButton}
          onClick={submitReviewHandler}
        >
          {user ? "SUBMIT" : "LOGIN AND SUBMIT"}
        </Button>
      </Box>
    </Box>
  );
};

export default Reviews;
