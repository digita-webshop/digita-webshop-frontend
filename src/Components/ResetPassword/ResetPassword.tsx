import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormFooter, FormWrapper } from "../../Styles/Login";
import Header from "../Login/Header/Header";

type Modal = "login" | "register" | "reset";
type Props = {
  closeLoginModal: () => void;
  modalTypeToggle: (type: Modal) => void;
};
function ResetPassword({ closeLoginModal, modalTypeToggle }: Props) {
  return (
    <FormWrapper>
      <Box sx={{ position: "relative" }}>
        <Header title={"reset password"} subtitle={"Recover your password"} />

        {/* <Box sx={errorStyles}>
          <Typography component="span">
            ERROR: Username or password incorrect!
          </Typography>
        </Box> */}
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField variant="standard" label="Username or Email" />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" fullWidth sx={{ height: "46px" }}>
                SEND MY PASSWORD
              </Button>
            </Grid>
          </Grid>
        </form>

        <FormFooter>
          <Typography component="span">Back to</Typography>
          <Button
            variant="contained"
            onClick={modalTypeToggle.bind(null, "login")}
          >
            LOGIN
          </Button>
        </FormFooter>
        <Box className="close-button" onClick={closeLoginModal}>
          <CloseRounded fontSize="large" />
        </Box>
      </Box>
    </FormWrapper>
  );
}

export default ResetPassword;
