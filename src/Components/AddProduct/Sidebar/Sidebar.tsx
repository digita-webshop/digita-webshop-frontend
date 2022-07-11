import { FormControl, Grid } from "@mui/material";
import {
  CardWrapper,
  PFormLabel,
  PTextField,
} from "../../../Styles/panelCommon";

function Sidebar() {
  return (
    <CardWrapper>
      <Grid container>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>price</PFormLabel>
            <PTextField placeholder="Type Here" />
          </FormControl>
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Sidebar;
