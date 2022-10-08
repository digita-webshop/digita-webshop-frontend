import { useState, FormEvent } from "react";
import { FormControl, Grid, Typography } from "@mui/material";
import { PButton, PFormLabel, PTextField } from "../../../styles/panel";
import { useUpdateUserMutation } from "../../../redux/user/userApi";
import { successMessage } from "../../../utils/toastMessages";

interface Props {
  role: string;
  id: string;
}

function Password({ role, id }: Props) {
  const [enteredCurrentPass, setEnteredCurrentPass] = useState("");
  const [enteredNewPass, setEnteredNewPass] = useState("");
  const [enteredConfirmPass, setEnteredConfirmPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [updateUser] = useUpdateUserMutation();

  const reset = () => {
    setEnteredCurrentPass("");
    setEnteredNewPass("");
    setEnteredConfirmPass("");
    setErrorMessage("");
  };

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (
      enteredCurrentPass.trim().length === 0 ||
      enteredNewPass.trim().length === 0 ||
      enteredNewPass.trim() !== enteredConfirmPass.trim()
    ) {
      setErrorMessage("ERROR: Invalid inputs");
      return;
    }

    const newUser = {
      password: enteredNewPass,
    };
    try {
      await updateUser({
        user: newUser,
        id,
        path: role,
      }).unwrap();

      successMessage("password changed successfully");
      reset();
    } catch (err: any) {
      console.log(err);
      setErrorMessage(err?.message);
    }
  };
  return (
    <Grid container spacing={4} component={"form"} onSubmit={submitHandler}>
      {errorMessage && (
        <Grid item xs={12}>
          <Typography color="error">{errorMessage}</Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <PFormLabel>current password</PFormLabel>
          <PTextField
            value={enteredCurrentPass}
            onChange={(e) => setEnteredCurrentPass(e.target.value)}
            placeholder="Type Here"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <PFormLabel>new password</PFormLabel>
          <PTextField
            value={enteredNewPass}
            onChange={(e) => setEnteredNewPass(e.target.value)}
            placeholder="Type Here"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <PFormLabel>confirm password</PFormLabel>
          <PTextField
            value={enteredConfirmPass}
            onChange={(e) => setEnteredConfirmPass(e.target.value)}
            placeholder="Type Here"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <PButton variant="contained" type="submit">
          reset password
        </PButton>
      </Grid>
    </Grid>
  );
}

export default Password;
