import { Grid, Box, Skeleton } from "@mui/material";

function SpecialProductPlaceholder() {
  return (
    <Grid item xs={12} sm={6} lg={4} sx={{ height: "150px" }}>
      <Box sx={{ display: "flex", height: "100%", gap: "10px" }}>
        <Box sx={{ width: "40%" }}>
          <Skeleton width={"100%"} height={"100%"} variant="rectangular" />
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Skeleton width={"40%"} height={15} variant="rectangular" />
          <Skeleton width={"100%"} height={20} variant="rectangular" />
          <Skeleton width={"40%"} height={15} variant="rectangular" />
          <Skeleton width={"30%"} height={30} variant="rectangular" />
        </Box>
      </Box>
    </Grid>
  );
}

export default SpecialProductPlaceholder;
