import { Dispatch, SetStateAction, useState } from "react";
import { CloseRounded } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, TextField, Typography } from "@mui/material";
import { useCreateAdminMutation } from "redux/user/userApi";
import { successMessage } from "utils/toastMessages";
import { errorStyles, FormWrapper } from "../../../Login/styles";

interface Props {
  setOpenRegister: Dispatch<SetStateAction<boolean>>;
}
function RegisterAdmin({ setOpenRegister }: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const [createAdmin] = useCreateAdminMutation();

  const submitHandler = async (event: any) => {
    event.preventDefault();

    const userName = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.confirmPassword.value;

    if (!userName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setErrorMessage("all fields are required");
      return;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setErrorMessage("passwords don't match");
      return;
    }
    const admin = {
      userName,
      email,
      password,
    };
    try {
      await createAdmin(admin).unwrap();
      successMessage("admin created successfully");
      setOpenRegister(false);
    } catch (err: any) {
      setErrorMessage(err?.data.message);
    }
  };
  return (
    <FormWrapper sx={{ width: "420px", form: { padding: "0px 50px 60px" } }}>
      <Box sx={{ textAlign: "center", marginY: "25px" }}>
        <Typography component={"h2"} textTransform={"capitalize"}>
          register new admin
        </Typography>
      </Box>
      {errorMessage && (
        <Box sx={errorStyles}>
          <Typography component="span"> ERROR:{errorMessage}</Typography>
        </Box>
      )}
      <form onSubmit={submitHandler}>
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField variant="standard" label="Username" name="username" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField variant="standard" label="Email" name="email" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField variant="standard" label="Password" type="password" name="password" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField variant="standard" label="Confirm Password" type="password" name="confirmPassword" />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" fullWidth sx={{ height: "46px" }} type="submit">
              REGISTER
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box className="close-button" sx={{ top: "5px!important" }} onClick={() => setOpenRegister(false)}>
        <CloseRounded fontSize="large" />
      </Box>
    </FormWrapper>
  );
}

export default RegisterAdmin;
