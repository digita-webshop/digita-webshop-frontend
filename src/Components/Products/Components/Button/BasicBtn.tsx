import { Box, Button } from "@mui/material";

const BasicBtn = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
      <Button
        variant="contained"
        sx={{
          padding: "0.899rem 3.2rem",
          fontSize: "16px",
          textTransform: "uppercase",
        }}
      >
        shop now
      </Button>
    </Box>
  );
};
export default BasicBtn;