import { FormEvent, useState, useRef } from "react";
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
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "redux/auth/authApi";
import { setCredentials } from "redux/auth/authSlice";
import { successMessage } from "utils/toastMessages";
import { useAppSelector } from "redux/store";
import { errorStyles, forgetPassStyles, FormFooter, FormWrapper, inputErrorStyles } from "./styles";
import Header from "./Header/Header";
import LoadingBar from "react-top-loading-bar";

type Modal = "login" | "register" | "reset";
type Props = {
  loginModalHandler: (value: boolean) => () => void;
  modalTypeToggle: (type: Modal) => void;
};
function Login({ loginModalHandler, modalTypeToggle }: Props) {
  const { email, user } = useAppSelector((state) => state.reducer.auth);
  const [enteredEmail, setEnteredEmail] = useState(email ?? "");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadingRef = useRef<any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location: any = useLocation();

  if (!!user) {
    navigate({ pathname: location.pathname, search: "" });
  }

  //* username validation
  let emailIsValid = enteredEmail.trim() !== "";
  const emailError = !emailIsValid && validationError;

  //* password validation
  let passwordIsValid = enteredPassword.trim() !== "";
  const passwordError = !passwordIsValid && validationError;

  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    loadingRef?.current.staticStart();
    if (!emailIsValid && !passwordIsValid) {
      setValidationError(true);
      loadingRef?.current.complete();
      return;
    }
    try {
      const userCredentials = {
        email: enteredEmail,
        password: enteredPassword,
      };

      const response = await login(userCredentials).unwrap();
      const data = response?.data;

      dispatch(
        setCredentials({
          user: data?.details,
          role: data.role,
          email: null,
        })
      );
      loadingRef?.current.complete();
      loginModalHandler(false)();

      if (data.role === "admin" || data.role === "superAdmin") {
        const path = location.state?.from ?? "/panel/dashboard";
        navigate(path, {
          replace: true,
        });
      }
      if (data.role === "user") {
        const path = location.state?.from ?? "/user/status";
        navigate(path, { replace: true });
      }
      successMessage("login successfully");
      console.log(response);
    } catch (err: any) {
      console.log(err);
      setErrorMessage(err?.data?.message);
    }
  };

  return (
    <>
      <LoadingBar color="#f03637" ref={loadingRef} />
      <FormWrapper>
        <Box sx={{ position: "relative" }}>
          <Header title={"log in"} subtitle={"Become a part of our community!"} />
          {errorMessage && (
            <Box sx={errorStyles}>
              <Typography component="span">ERROR: {errorMessage}</Typography>
            </Box>
          )}
          <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    variant="standard"
                    label="Email"
                    sx={emailError ? inputErrorStyles : {}}
                    value={enteredEmail}
                    onChange={(e) => setEnteredEmail(e.target.value)}
                  />
                  {emailError && (
                    <Typography
                      sx={{
                        color: "#f03637",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Email is required
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
                  />
                  {passwordError && (
                    <Typography
                      sx={{
                        color: "#f03637",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Password is required
                    </Typography>
                  )}
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
                <Button variant="contained" fullWidth sx={{ height: "46px" }} type={"submit"}>
                  LOGIN
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography component={"div"} sx={forgetPassStyles} onClick={modalTypeToggle.bind(null, "reset")}>
              Forget your password? Get help
            </Typography>
          </Box>
          <FormFooter>
            <Typography component="span">Not a Member ?</Typography>
            <Button variant="contained" onClick={modalTypeToggle.bind(null, "register")}>
              sign up
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

export default Login;
