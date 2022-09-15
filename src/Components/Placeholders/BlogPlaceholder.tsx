import { Box, Skeleton } from "@mui/material";

function BlogPlaceholder() {
  return (
    <Box>
      <Skeleton variant="rectangular" sx={{ height: "230px" }} />
      <Skeleton variant="text" height={30} width={"70%"} />
      <Skeleton variant="text" height={40} width={"90%"} />
    </Box>
  );
}

export default BlogPlaceholder;
