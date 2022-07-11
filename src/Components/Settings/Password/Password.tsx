import { FormControl, Grid } from "@mui/material";
import { PButton, PFormLabel, PTextField } from "../../../Styles/panelCommon";

function Password() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <PFormLabel>current password</PFormLabel>
          <PTextField placeholder="Type Here" />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <PFormLabel>new password</PFormLabel>
          <PTextField placeholder="Type Here" />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <PFormLabel>confirm password</PFormLabel>
          <PTextField placeholder="Type Here" />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <PButton variant="contained">reset password</PButton>
      </Grid>
    </Grid>
  );
}

export default Password;
