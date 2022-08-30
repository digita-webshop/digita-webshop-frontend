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
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApi";
import { setCredentials } from "../../features/auth/authSlice";
import {
  errorStyles,
  forgetPassStyles,
  FormFooter,
  FormWrapper,
  inputErrorStyles,
} from "../../Styles/Login";
import Header from "./Header/Header";

type Modal = "login" | "register" | "reset";
type Props = {
  closeLoginModal: () => void;
  modalTypeToggle: (type: Modal) => void;
};
function Login({ closeLoginModal, modalTypeToggle }: Props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //* username validation
  let emailIsValid = enteredEmail.trim() !== "";
  const emailError = !emailIsValid && validationError;

  //* password validation
  let passwordIsValid = enteredPassword.trim() !== "";
  const passwordError = !passwordIsValid && validationError;

  const [login] = useLoginMutation();
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (!emailIsValid && !passwordIsValid) {
      setValidationError(true);
      return;
    }
    try {
      const userCredentials = {
        email: enteredEmail,
        password: enteredPassword,
      };

      const data = await login(userCredentials).unwrap();
      if (data?.message === "Login successful") {
        dispatch(
          setCredentials({
            user: data?.data?.details,
            role: data.data.role,
          })
        );
        if (data.data.role === "admin") {
          navigate("/panel/dashboard", { replace: true });
        }
        if (data.data.role === "user") {
          navigate("/user/status", { replace: true });
        }
      }
      closeLoginModal();
      console.log(data);
    } catch (err) {
      console.log(err);
      setDisplayError(true);
    }
  };
  return (
    <FormWrapper>
      <Box sx={{ position: "relative" }}>
        <Header title={"log in"} subtitle={"Become a part of our community!"} />
        {displayError && (
          <Box sx={errorStyles}>
            <Typography component="span">
              ERROR: Username or password incorrect!
            </Typography>
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
                    sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
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
                    sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
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
              <Button
                variant="contained"
                fullWidth
                sx={{ height: "46px" }}
                type={"submit"}
              >
                LOGIN
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            component={"div"}
            sx={forgetPassStyles}
            onClick={modalTypeToggle.bind(null, "reset")}
          >
            Forget your password? Get help
          </Typography>
        </Box>
        <FormFooter>
          <Typography component="span">Not a Member ?</Typography>
          <Button
            variant="contained"
            onClick={modalTypeToggle.bind(null, "register")}
          >
            sign up
          </Button>
        </FormFooter>
        <Box className="close-button" onClick={closeLoginModal}>
          <CloseRounded fontSize="large" />
        </Box>
      </Box>
    </FormWrapper>
  );
}

export default Login;
