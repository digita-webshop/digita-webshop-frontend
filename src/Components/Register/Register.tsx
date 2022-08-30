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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../features/auth/authApi";
import { setCredentials } from "../../features/auth/authSlice";
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
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [signUp] = useSignUpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const confirmPasswordError =
    !confirmPasswordIsValid && confirmPasswordTouched;

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (
      !usernameIsValid &&
      !emailIsValid &&
      !passwordIsValid &&
      !confirmPasswordIsValid
    ) {
      return;
    }
    try {
      const userCredentials = {
        userName: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
      };
      const data = await signUp(userCredentials).unwrap();
      console.log(data);

      if (data?.message === "User created successfully") {
        dispatch(setCredentials({ user: data?.data, role: "user" }));
        navigate("/user/status", { replace: true });
      }
      closeLoginModal();
      console.log(data);
    } catch (err: any) {
      setErrorMessage(err?.data?.message);
      console.log(err);
    }
  };
  return (
    <FormWrapper>
      <Box sx={{ position: "relative" }}>
        <Header
          title={"create an account"}
          subtitle={"Welcome! Register for an account"}
        />
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
                    sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
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
                    sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
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
                    sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
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
                    sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
                  >
                    {confirmPasswordErrorMessage}
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
