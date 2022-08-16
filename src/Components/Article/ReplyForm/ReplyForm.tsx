import { Button, FormControl, Grid, TextareaAutosize } from "@mui/material";

function ReplyForm() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextareaAutosize
            aria-label="article comment textarea"
            placeholder="Your Comment Here..."
            style={{
              minWidth: "98%",
              maxWidth: "98%",
              maxHeight: "400px",
              backgroundColor: "#F5F5F5",
              borderColor: "#bbb",
              padding: "5px",
              fontFamily: "jost",
              outline: "none",
            }}
            minRows={9}
            maxRows={12}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "22%" },
            height: "40px",
            backgroundColor: "#f03637",
            color: "white",
            "&:hover": { backgroundColor: "#333333" },
          }}
        >
          Post Comment
        </Button>
      </Grid>
    </Grid>
  );
}

export default ReplyForm;
