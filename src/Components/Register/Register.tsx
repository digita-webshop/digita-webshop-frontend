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
import { FormFooter, FormWrapper } from "../../Styles/Login";
import Header from "../Login/Header/Header";

type Modal = "login" | "register" | "forget";

type Props = {
  closeLoginModal: () => void;
  modalTypeToggle: (trpe: Modal) => void;
};

function Register({ closeLoginModal, modalTypeToggle }: Props) {
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField variant="standard" label="Username" />
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
