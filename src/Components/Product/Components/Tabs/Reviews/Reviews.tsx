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

const Reviews = () => {
  const [rating, setRating] = useState(1);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} id="review">
      <Box sx={ProductContentStyle}>
        <ReviewsList />

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
            />
          </PFormControl>
        </Box>

        <Button variant="contained" sx={SubmitButton}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};

export default Reviews;
