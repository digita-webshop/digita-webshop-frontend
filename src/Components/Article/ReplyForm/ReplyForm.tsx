import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { inputStyles } from "../../../Styles/Article";
interface Props {
  enteredName: string;
  setEnteredName: Dispatch<SetStateAction<string>>;
  setNameTouched: Dispatch<SetStateAction<boolean>>;
  nameIsValid: boolean;
  nameTouched: boolean;
  enteredEmail: string;
  setEnteredEmail: Dispatch<SetStateAction<string>>;
  setEmailTouched: Dispatch<SetStateAction<boolean>>;
  emailIsValid: boolean;
  emailTouched: boolean;
}
function ReplyForm({
  enteredName,
  setEnteredName,
  setNameTouched,
  nameIsValid,
  nameTouched,
  enteredEmail,
  setEnteredEmail,
  setEmailTouched,
  emailIsValid,
  emailTouched,
}: Props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            placeholder="Your Comment Here..."
            multiline
            rows={6}
            sx={{
              "& .MuiOutlinedInput-root": {},
              backgroundColor: "#F5F5F5",
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <TextField
            placeholder="Name (required)"
            sx={inputStyles}
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
            onBlur={() => setNameTouched(true)}
          />
          {!nameIsValid && nameTouched && (
            <Typography sx={{ color: "#f03637", marginTop: "2px" }}>
              name is required
            </Typography>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <TextField
            placeholder="Email (required)"
            sx={inputStyles}
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
          />
          {!emailIsValid && emailTouched && (
            <Typography sx={{ color: "#f03637", marginTop: "2px" }}>
              please enter a valid email address
            </Typography>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <TextField placeholder="Website" sx={inputStyles} />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#f03637",
                  "&.Mui-checked": {
                    color: "#f03637",
                  },
                }}
              />
            }
            label="Save my name, email, and website in this browser for the next time I comment."
          />
        </FormGroup>
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
