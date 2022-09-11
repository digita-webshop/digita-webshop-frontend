import { Box, Typography } from "@mui/material";
function NotFound({ message }: { message?: string }) {
  return (
    <Box sx={{ textAlign: "center", margin: "40px auto" }}>
      <Typography variant="h5" sx={{ color: "common.digitaBlack" }}>
        {message ? message : "No result found!"}
      </Typography>
    </Box>
  );
}

export default NotFound;
