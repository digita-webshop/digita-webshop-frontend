import { FormControl, FormLabel, Grid } from "@mui/material";
import { PTextField } from "../../../Styles/panelCommon";
import { formLabelStyles } from "../../../Styles/Settings";

function General() {
  return (
    <Grid container>
      <Grid container item xs={12} md={8} spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel sx={formLabelStyles}>first name</FormLabel>
            <PTextField placeholder="Type Here" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel sx={formLabelStyles}>last name</FormLabel>
            <PTextField placeholder="Type Here" />
          </FormControl>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </Grid>
  );
}

export default General;
