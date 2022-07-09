import { FormControl, FormLabel, Grid } from "@mui/material";
import { PButton, PTextField } from "../../../Styles/panelCommon";
import { formLabelStyles } from "../../../Styles/Settings";

function Password() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FormLabel sx={formLabelStyles}>current password</FormLabel>
          <PTextField placeholder="Type Here" />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FormLabel sx={formLabelStyles}>new password</FormLabel>
          <PTextField placeholder="Type Here" />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FormLabel sx={formLabelStyles}>confirm password</FormLabel>
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
