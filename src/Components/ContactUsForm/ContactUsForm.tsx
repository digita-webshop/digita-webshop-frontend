import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    height: { xs: "50px", md: "40px" },
  },
};
function ContactUsForm() {
  return (
    <Box
      sx={{ backgroundColor: "#F5F5F5", padding: "30px", borderRadius: "3px" }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        marginBottom={4}
        sx={{ fontSize: { xs: "28px", sm: "32px" } }}
      >
        SEND US A MESSAGE
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel
                color="primary"
                sx={{ fontSize: "15px", color: "#333333" }}
              >
                Your Name
              </FormLabel>
              <TextField placeholder="Your Name" sx={inputStyles} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel
                color="primary"
                sx={{ fontSize: "15px", color: "#333333" }}
              >
                Your Email
              </FormLabel>
              <TextField placeholder="Your Email" sx={inputStyles} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel
                color="primary"
                sx={{ fontSize: "15px", color: "#333333" }}
              >
                Subject
              </FormLabel>
              <TextField placeholder="Your Subject" sx={inputStyles} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel
                color="primary"
                sx={{ fontSize: "15px", color: "#333333" }}
              >
                Message
              </FormLabel>
              <TextField
                placeholder="Your Message"
                multiline
                rows={6}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                  },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#f03637",
                      "&.Mui-checked": {
                        color: "#f03637",
                      },
                    }}
                  />
                }
                label="Also subscribe us"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ width: { xs: "100%", sm: "35%" }, height: "50px" }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default ContactUsForm;
