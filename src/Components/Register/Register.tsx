import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  errorStyles,
  FormFooter,
  FormWrapper,
  inputErrorStyles,
} from "../../Styles/Login";
import Header from "../Login/Header/Header";

type Modal = "login" | "register" | "reset";

type Props = {
  closeLoginModal: () => void;
  modalTypeToggle: (trpe: Modal) => void;
};

function Register({ closeLoginModal, modalTypeToggle }: Props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [usernameTouched, setUsernameTouched] = useState(false);

  let usernameIsValid = true;
  let usernameErrorMessage = "";

  if (!/^[a-zA-Z0-9]+$/.test(enteredUsername)) {
    usernameErrorMessage = "Enter a valid username";
    usernameIsValid = false;
  }
  if (enteredUsername.trim() === "") {
    usernameErrorMessage = "Username is required";
    usernameIsValid = false;
  }
  const usernameError = !usernameIsValid && usernameTouched;

  return (
    <FormWrapper>
      <Box sx={{ position: "relative" }}>
        <Header
          title={"create an account"}
          subtitle={"Welcome! Register for an account"}
        />
        {/* <Box sx={errorStyles}>
          <Typography component="span">
            ERROR: Username or password incorrect!
          </Typography>
        </Box> */}
        <form>
          <Grid container spacing={1.5}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  variant="standard"
                  label="Username"
                  sx={usernameError ? inputErrorStyles : {}}
                  value={enteredUsername}
                  onChange={(e) => setEnteredUsername(e.target.value)}
                  onBlur={() => setUsernameTouched(true)}
                />
                {usernameError && (
                  <Typography
                    sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
                  >
                    {usernameErrorMessage}
                  </Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField variant="standard" label="Your Password" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  variant="standard"
                  label="Password"
                  type={"password"}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  variant="standard"
                  label="Confirm Password"
                  type={"password"}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        "&.Mui-checked": {
                          color: "#f03637",
                        },
                      }}
                    />
                  }
                  sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
                  label="Remember Me"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth sx={{ height: "46px" }}>
                REGISTER
              </Button>
            </Grid>
          </Grid>
        </form>

        <FormFooter>
          <Typography component="span">Already a Member ?</Typography>
          <Button
            variant="contained"
            onClick={modalTypeToggle.bind(null, "login")}
          >
            sign in
          </Button>
        </FormFooter>
        <Box className="close-button" onClick={closeLoginModal}>
          <CloseRounded fontSize="large" />
        </Box>
      </Box>
    </FormWrapper>
  );
}

export default Register;
