import { CloudUpload } from "@mui/icons-material";
import { Box, FormControl, FormLabel, Grid } from "@mui/material";
import { PButton, PTextField } from "../../../Styles/panelCommon";
import { formLabelStyles, POutlinedButton } from "../../../Styles/Settings";

function General() {
  return (
    <Grid container spacing={3}>
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
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel sx={formLabelStyles}>email</FormLabel>
            <PTextField placeholder="example@email.com" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel sx={formLabelStyles}>phone</FormLabel>
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
