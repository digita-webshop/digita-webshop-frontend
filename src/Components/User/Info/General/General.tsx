import { useState } from "react";
import { CloudUpload } from "@mui/icons-material";
import { Box, FormControl, Grid } from "@mui/material";
import {
  PButton,
  PFormLabel,
  POutlinedButton,
  PTextField,
} from "../../../../Styles/panelCommon";

const General = () => {
  const [name, setName] = useState("Siavash");
  const [lName, setLName] = useState("Khani");
  const [email, setEmail] = useState("siavash.khani200@gmail.com");
  const [phone, setPhone] = useState("+989017079374");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleLNameChange = (e: any) => {
    setLName(e.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid container item xs={12} md={8} spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <PFormLabel>first name</PFormLabel>
            <PTextField
              value={name}
              placeholder="Type Here"
              onChange={handleNameChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <PFormLabel>last name</PFormLabel>
            <PTextField
              value={lName}
              placeholder="Type Here"
              onChange={handleLNameChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>email</PFormLabel>
            <PTextField
              value={email}
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>phone</PFormLabel>
            <PTextField
              value={phone}
              placeholder="+1234567890"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <Box
            sx={{
              textAlign: "center",
              img: { width: "100%", maxWidth: "180px", borderRadius: "50%" },
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
};

export default General;
