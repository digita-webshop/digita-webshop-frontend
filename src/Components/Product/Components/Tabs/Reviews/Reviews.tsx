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
import { useState } from "react";
import ReviewsList from "./ReviewsList/ReviewsList";
import { IProduct } from "../../../../../Services/Types/product";
import { useAppSelector } from "../../../../../store";
import { useUpdateProductMutation } from "../../../../../features/products/productsApi";
import { useSearchParams } from "react-router-dom";

interface Props {
  product: IProduct;
}
const Reviews = ({ product }: Props) => {
  const user = useAppSelector((state) => state.authReducer.user);
  const [rating, setRating] = useState(1);
  const [reviewDescription, setReviewDescription] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  const { reviews }: any = product;
  const [updateProduct] = useUpdateProductMutation();

  const submitReviewHandler = async () => {
    if (user) {
      let review = {
        userId: user?._id,
        rating,
        description: reviewDescription,
      };
      let updatedReviews = [...reviews];
      updatedReviews.push(review);
      let newProduct = { ...product, reviews: updatedReviews };
      try {
        let response = await updateProduct(newProduct).unwrap();
        console.log(response);
        if (response.code === 200) {
          setReviewDescription("");
          setRating(1);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      searchParams.set("login", "open");
      setSearchParams(searchParams);
    }
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} id="review">
      <Box sx={ProductContentStyle}>
        {reviews?.length !== 0 ? (
          reviews?.map((review: any) => (
            <ReviewsList
              userId={review.userId}
              rating={review.rating!}
              description={review.description}
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
