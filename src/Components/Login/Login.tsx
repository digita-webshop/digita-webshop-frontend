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
import {
  errorStyles,
  forgetPassStyles,
  FormFooter,
  FormWrapper,
} from "../../Styles/Login";

function Login() {
  return (
    <FormWrapper>
      <Box sx={{ textAlign: "center", marginY: "25px" }}>
        <Typography component={"h2"}>Log In</Typography>
        <Typography component={"h6"}>
          Become a part of our community!
        </Typography>
      </Box>
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
              <TextField
                variant="standard"
                label="Password"
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
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={forgetPassStyles}>
          Forget your password? Get help
        </Typography>
      </Box>
      <FormFooter>
        <Typography component="span">Not a Member ?</Typography>
        <Button variant="contained">sign up</Button>
      </FormFooter>
    </FormWrapper>
  );
}

export default Login;
