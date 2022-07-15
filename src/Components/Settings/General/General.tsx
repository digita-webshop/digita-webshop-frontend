import { CloudUpload } from "@mui/icons-material";
import { Box, FormControl, Grid } from "@mui/material";
import {
  PButton,
  PFormLabel,
  POutlinedButton,
  PTextField,
} from "../../../Styles/panelCommon";

function General() {
  return (
    <Grid container spacing={3}>
      <Grid container item xs={12} md={8} spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <PFormLabel>first name</PFormLabel>
            <PTextField placeholder="Type Here" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <PFormLabel>last name</PFormLabel>
            <PTextField placeholder="Type Here" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>email</PFormLabel>
            <PTextField placeholder="example@email.com" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>phone</PFormLabel>
            <PTextField placeholder="+1234567890" />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <Box
            sx={{
              textAlign: "center",
              img: { height: "195px", borderRadius: "50%" },
            }}
          >
            <img
              src="https://www.ecommerce-admin.com/demo/images/people/avatar1.jpg"
              alt=""
            />
          </Box>
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <POutlinedButton variant="contained">
              <CloudUpload sx={{ marginRight: "5px" }} /> upload
            </POutlinedButton>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <PButton variant="contained">save changes</PButton>
      </Grid>
    </Grid>
  );
}

export default General;
