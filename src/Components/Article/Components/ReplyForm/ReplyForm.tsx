import { Dispatch, SetStateAction } from "react";
import { Button, FormControl, Grid, TextareaAutosize } from "@mui/material";
import { IUser } from "../../../../types/user";

interface Props {
  reviewDescription: string;
  setReviewDescription: Dispatch<SetStateAction<string>>;
  user: IUser | null;
}

function ReplyForm({ reviewDescription, setReviewDescription, user }: Props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextareaAutosize
            aria-label="article comment textarea"
            placeholder="Your Comment Here..."
            value={reviewDescription}
            onChange={(e) => setReviewDescription(e.target.value)}
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
          type="submit"
        >
          {user ? "Post Comment" : "LOGIN AND Post Comment"}
        </Button>
      </Grid>
    </Grid>
  );
}

export default ReplyForm;
