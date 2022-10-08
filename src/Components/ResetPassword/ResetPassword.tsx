import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { FormFooter, FormWrapper, inputErrorStyles } from "../Login/styles";
import Header from "../Login/Header/Header";

type Modal = "login" | "register" | "reset";
type Props = {
  loginModalHandler: (open: boolean) => () => void;
  modalTypeToggle: (type: Modal) => void;
};
function ResetPassword({ loginModalHandler, modalTypeToggle }: Props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [validationError, setValidationError] = useState(false);

  let usernameIsValid = enteredUsername.trim() !== "";
  const usernameError = !usernameIsValid && validationError;

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!usernameIsValid) {
      setValidationError(true);
      return;
    }
  };
  return (
    <FormWrapper>
      <Box sx={{ position: "relative" }}>
        <Header title={"reset password"} subtitle={"Recover your password"} />

        {/* <Box sx={errorStyles}>
          <Typography component="span">
            ERROR: Username or password incorrect!
          </Typography>
        </Box> */}
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  variant="standard"
                  label="Username or Email"
                  sx={usernameError ? inputErrorStyles : {}}
                  value={enteredUsername}
                  onChange={(e) => setEnteredUsername(e.target.value)}
                />
                {usernameError && (
                  <Typography
                    sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
                  >
                    this field is required
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{ height: "46px" }}
                type={"submit"}
              >
                SEND MY PASSWORD
              </Button>
            </Grid>
          </Grid>
        </form>

        <FormFooter>
          <Typography component="span">Back to</Typography>
          <Button
            variant="contained"
            onClick={modalTypeToggle.bind(null, "login")}
          >
            LOGIN
          </Button>
        </FormFooter>
        <Box className="close-button" onClick={loginModalHandler(false)}>
          <CloseRounded fontSize="large" />
        </Box>
      </Box>
    </FormWrapper>
  );
}

export default ResetPassword;
