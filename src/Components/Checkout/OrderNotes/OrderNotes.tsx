import { Box, TextareaAutosize, Typography } from "@mui/material";

function OrderNotes() {
  return (
    <Box>
      <Typography
        sx={{
          color: "common.digitaGrey",
          fontSize: "14px",
          fontWeight: 500,
          mb: "10px",
        }}
      >
        Order notes (optional)
      </Typography>
      <TextareaAutosize
        aria-label="order notes textarea"
        placeholder="Notes about your order, e.g. special notes for delivery."
        style={{
          minWidth: "98%",
          maxWidth: "98%",
          maxHeight: "400px",
          backgroundColor: "#F5F5F5",
          borderColor: "#bbb",
          padding: "5px",
          fontFamily: "jost",
        }}
        minRows={9}
        maxRows={12}
      />
    </Box>
  );
}

export default OrderNotes;
