import {
  ProductContentStyle,
  ProductTextStyle,
  SubmitButton,
} from "../../../../../Styles/Product";
import { PFormControl } from "../../../../../Styles/panelCommon";

import {
  Typography,
  Box,
  Rating,
  Avatar,
  Divider,
  Button,
  FormLabel,
  TextField,
} from "@mui/material";
import avatar from "../../../../../Assets/Images/Product/avatar.png";
import { useState } from "react";

const Reviews = () => {
  const [rating, setRating] = useState(1);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} id="review">
      <Box sx={ProductContentStyle}>
        <Box>
          <Box>
            <Avatar
              alt="avatar"
              src={avatar}
              sx={{
                float: "left",
                width: "80px",
                height: "80px",
                marginRight: "10px",
                diplay: {
                  xs: "none",
                  sm: "inline-block",
                },
              }}
            />
          </Box>

          <Box sx={{ marginRight: "10px" }}>
            <Typography variant="body2" component="p">
              <span className="userName">Peter Giroud </span>{" "}
              <time> – September 17, 2019</time>
            </Typography>
          </Box>
          <Rating
            name="read-only"
            defaultValue={5}
            size="small"
            readOnly
            sx={{ float: "Right", marginTop: "-10px" }}
          />

          <Box sx={{ width: "95%", marginRight: "10px", marginTop: "-20px" }}>
            <Typography variant="body2" component="p" sx={ProductTextStyle}>
              Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam,
              purus eget sagittis vulputate, sapien libero hendrerit est
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ padding: "3px", width: "100%" }} />

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
