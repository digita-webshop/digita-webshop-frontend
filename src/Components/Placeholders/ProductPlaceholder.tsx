import { Fragment } from "react";
import { Box, Skeleton } from "@mui/material";

function ProductPlaceholder() {
  return (
    <Fragment>
      <Box>
        <Skeleton
          sx={{
            height: {
              xs: "320px",
              sm: "200px",
              md: "240px",
              lg: "260px",
            },
          }}
          variant="rectangular"
        />
      </Box>
      <Skeleton height={20} width={"40%"} />
      <Skeleton height={30} width={"100%"} />
      <Skeleton height={20} width={"40%"} />
    </Fragment>
  );
}

export default ProductPlaceholder;
