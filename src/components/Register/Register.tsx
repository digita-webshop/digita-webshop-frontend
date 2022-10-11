import { FormEvent, useState, useRef } from "react";
import { CloseRounded } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "redux/auth/authApi";
import { setCredentials } from "redux/auth/authSlice";
import { successMessage } from "utils/toastMessages";
import { errorStyles, FormFooter, FormWrapper, inputErrorStyles } from "../Login/styles";
import Header from "../Login/Header/Header";
import LoadingBar from "react-top-loading-bar";

type Modal = "login" | "register" | "reset";

type Props = {
  loginModalHandler: (open: boolean) => () => void;
  modalTypeToggle: (type: Modal) => void;
};

function Register({ loginModalHandler, modalTypeToggle }: Props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [signUp, { isLoading }] = useSignUpMutation();
  const loadingRef = useRef<any>(null);

  const dispatch = useDispatch();

  //* username validation
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

  //* email validation
  let emailIsValid = true;
  let emailErrorMessage = "";

  if (!/^\S+@\S+\.\S+$/.test(enteredEmail)) {
    emailErrorMessage = "Enter a valid Email";
    emailIsValid = false;
  }
  if (enteredEmail.trim() === "") {
    emailErrorMessage = "Email is required";
    emailIsValid = false;
  }
  const emailError = !emailIsValid && emailTouched;

  //* password validation
  let passwordErrorMessage = ["password should contain at least"];
  let passwordIsValid = true;

  if (!/[a-zA-Z0-9]{6,}/.test(enteredPassword)) {
    passwordErrorMessage.push(" 6 characters");
    passwordIsValid = false;
  }
  if (!/(?=.*[A-Z])/.test(enteredPassword)) {
    passwordErrorMessage.push(" one uppercase");
    passwordIsValid = false;
  }
  if (!/(?=.*\d)/.test(enteredPassword)) {
    passwordErrorMessage.push(" one digit");
    passwordIsValid = false;
  }
  const passwordError = !passwordIsValid && passwordTouched;

  //* confirm password validation
  let confirmPasswordErrorMessage = "";
  let confirmPasswordIsValid = true;

  if (enteredPassword !== enteredConfirmPassword) {
    confirmPasswordErrorMessage = "passwords must match ";
    confirmPasswordIsValid = false;
  }
  if (enteredConfirmPassword.trim() === "") {
    confirmPasswordErrorMessage = "confirm password is required ";
    confirmPasswordIsValid = false;
  }
  const confirmPasswordError = !confirmPasswordIsValid && confirmPasswordTouched;

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    loadingRef?.current.staticStart();

    if (!usernameIsValid && !emailIsValid && !passwordIsValid && !confirmPasswordIsValid) {
      loadingRef?.current.complete();

      return;
    }
    try {
      const userCredentials = {
        userName: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
      };
      const response = await signUp(userCredentials).unwrap();

      dispatch(setCredentials({ user: null, role: null, email: response.data.email }));
      loadingRef?.current.complete();

      successMessage("account created successfully");
      modalTypeToggle("login");
      console.log(response);
    } catch (err: any) {
      setErrorMessage(err?.data?.message);
      console.log(err);
    }
  };
  return (
    <>
      <LoadingBar color="#f03637" ref={loadingRef} />
      <FormWrapper>
        <Box sx={{ position: "relative" }}>
          <Header title={"create an account"} subtitle={"Welcome! Register for an account"} />
          {errorMessage && (
            <Box sx={errorStyles}>
              <Typography component="span"> ERROR:{errorMessage}</Typography>
            </Box>
          )}
          <form onSubmit={submitHandler}>
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
                      sx={{
                        color: "#f03637",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {usernameErrorMessage}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    variant="standard"
                    label="Your Email"
                    sx={emailError ? inputErrorStyles : {}}
                    value={enteredEmail}
                    onChange={(e) => setEnteredEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                  />
                  {emailError && (
                    <Typography
                      sx={{
                        color: "#f03637",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {emailErrorMessage}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    variant="standard"
                    label="Password"
                    type={"password"}
                    sx={passwordError ? inputErrorStyles : {}}
                    value={enteredPassword}
                    onChange={(e) => setEnteredPassword(e.target.value)}
                    onBlur={() => setPasswordTouched(true)}
                  />
                  {passwordError && (
                    <Typography
                      sx={{
                        color: "#f03637",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {passwordErrorMessage.join(" ")}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    variant="standard"
                    label="Confirm Password"
                    type={"password"}
                    sx={confirmPasswordError ? inputErrorStyles : {}}
                    value={enteredConfirmPassword}
                    onChange={(e) => setEnteredConfirmPassword(e.target.value)}
                    onBlur={() => setConfirmPasswordTouched(true)}
                  />
                  {confirmPasswordError && (
                    <Typography
                      sx={{
                        color: "#f03637",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {confirmPasswordErrorMessage}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" fullWidth sx={{ height: "46px" }} type={"submit"}>
                  REGISTER
                </Button>
              </Grid>
            </Grid>
          </form>

          <FormFooter>
            <Typography component="span">Already a Member ?</Typography>
            <Button variant="contained" onClick={modalTypeToggle.bind(null, "login")}>
              sign in
            </Button>
          </FormFooter>
          <Box className="close-button" onClick={loginModalHandler(false)}>
            <CloseRounded fontSize="large" />
          </Box>
        </Box>
      </FormWrapper>
    </>
  );
}

export default Register;
