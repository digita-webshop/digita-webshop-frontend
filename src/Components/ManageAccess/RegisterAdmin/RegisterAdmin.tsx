import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { FormWrapper } from "../../../Styles/Login";
interface Props {
  setOpenRegister: Dispatch<SetStateAction<boolean>>;
}
function RegisterAdmin({ setOpenRegister }: Props) {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <FormWrapper sx={{ width: "420px", form: { padding: "0px 50px 60px" } }}>
      <Box sx={{ textAlign: "center", marginY: "25px" }}>
        <Typography component={"h2"} textTransform={"capitalize"}>
          register new admin
        </Typography>
      </Box>
      <form onSubmit={submitHandler}>
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField variant="standard" label="Username" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField variant="standard" label="Email" />
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
      <Box
        className="close-button"
        sx={{ top: "5px!important" }}
        onClick={() => setOpenRegister(false)}
      >
        <CloseRounded fontSize="large" />
      </Box>
    </FormWrapper>
  );
}

export default RegisterAdmin;
