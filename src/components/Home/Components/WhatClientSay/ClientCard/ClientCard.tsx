import { Box, Grid, Rating, Typography } from "@mui/material";
import { IReviews } from "types/product";
import { ReusableTypography } from "../styles";

type Props = {
  review: IReviews;
};

function ClientCard({ review }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        position: "relative",
        width: "100%",
      }}
    >
      <ReusableTypography
        fontWeight="400"
        smallSizeFontSize="17px"
        mediumSizeFontSize="24px"
        component="p"
        sx={{
          fontSize: 32,
          textAlign: "center",
        }}
      >
        {review.description}
      </ReusableTypography>

      <Box sx={{ display: "grid", placeItems: "center" }}>
        <Box sx={{ mt: 3, "& img": { width: 70, height: 70 } }}>
          <Grid container spacing={1}>
            <Grid item sx={{ img: { aspectRatio: "1", borderRadius: "50%" } }}>
              <img
                src={
                  review?.userId?.image ??
                  "https://res.cloudinary.com/dmgb7kvmn/image/upload/v1665232584/digita-images/static/hejsp2xbfaxqqqzdsmye.jpg"
                }
                alt="profile"
              />
            </Grid>
            <Grid item>
              <Grid
                sx={{
                  ml: "6px",
                }}
                container
                direction="column"
                spacing={0}
                height="100%"
                justifyContent="space-evenly"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: 15,
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    {review.userId?.userName ?? "deleted account"}
                  </Typography>
                </Grid>

                <Grid item>
                  <Rating size="small" name="read-only" value={review.rating} readOnly />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default ClientCard;
